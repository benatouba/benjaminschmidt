<script setup lang="ts">
import { resolveKnownTechBadge } from "@/data/techBadges";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

import type { ArticleHistoryItem, PublicationItem } from "@/types/site";

type WritingKind =
  | "Journal"
  | "Conference"
  | "Preprint"
  | "Book Chapter"
  | "Thesis"
  | "Technical Report"
  | "Article"
  | "Interview"
  | "Editorial"
  | "Review";

interface WritingEntry {
  id: string;
  title: string;
  outlet: string;
  kind: WritingKind;
  summary: string;
  tags: string[];
  link?: string;
  doi?: string;
  releaseDate: string;
}

const normalizeTitle = (value: string) =>
  value
    .toLowerCase()
    .replaceAll(/[\u2010-\u2015]/g, "-")
    .replaceAll(/[^a-z0-9]+/g, " ")
    .trim();

const isPreprintEntry = (entry: WritingEntry) =>
  entry.kind === "Preprint" || /preprint|egusphere|essoar/i.test(`${entry.outlet} ${entry.link ?? ""}`);

const kindPriority: Record<WritingKind, number> = {
  Journal: 1,
  Article: 2,
  Conference: 3,
  "Book Chapter": 4,
  Review: 5,
  Editorial: 6,
  Interview: 7,
  "Technical Report": 8,
  Thesis: 9,
  Preprint: 10,
};

const shouldPreferEntry = (candidate: WritingEntry, current: WritingEntry) => {
  const candidatePriority = kindPriority[candidate.kind];
  const currentPriority = kindPriority[current.kind];

  if (candidatePriority !== currentPriority) {
    return candidatePriority < currentPriority;
  }

  return candidate.releaseDate > current.releaseDate;
};

const props = defineProps<{
  publications: PublicationItem[];
  writing: ArticleHistoryItem[];
}>();

const { t } = useI18n({ useScope: "global" });

const kindFilter = ref<"All" | WritingKind>("All");

const writingKinds: Array<"All" | WritingKind> = [
  "All",
  "Journal",
  "Conference",
  "Preprint",
  "Book Chapter",
  "Thesis",
  "Technical Report",
  "Article",
  "Interview",
  "Editorial",
  "Review",
];

const toIsoFromYear = (year: number) => `${year}-01-01`;

const mergedEntries = computed<WritingEntry[]>(() => {
  const publications = props.publications.map((entry) => ({
    id: `pub:${entry.title}:${entry.year}`,
    title: entry.title,
    outlet: entry.venue,
    kind: entry.kind,
    summary: entry.summary,
    tags: entry.tags,
    link: entry.link,
    doi: entry.doi,
    releaseDate: toIsoFromYear(entry.year),
  }));

  const writing = props.writing.map((entry) => ({
    id: `writing:${entry.title}:${entry.published}`,
    title: entry.title,
    outlet: entry.outlet,
    kind: entry.kind,
    summary: entry.summary,
    tags: entry.tags,
    link: entry.link,
    releaseDate: entry.published,
  }));

  const merged = [...publications, ...writing].sort((a, b) =>
    b.releaseDate.localeCompare(a.releaseDate),
  );

  const titlesWithPublishedVersion = new Set(
    merged.filter((entry) => !isPreprintEntry(entry)).map((entry) => normalizeTitle(entry.title)),
  );

  const bestByTitle = new Map<string, WritingEntry>();

  for (const entry of merged) {
    const normalizedTitle = normalizeTitle(entry.title);

    if (isPreprintEntry(entry) && titlesWithPublishedVersion.has(normalizedTitle)) {
      continue;
    }

    const current = bestByTitle.get(normalizedTitle);
    if (!current || shouldPreferEntry(entry, current)) {
      bestByTitle.set(normalizedTitle, entry);
    }
  }

  return [...bestByTitle.values()].sort((a, b) => b.releaseDate.localeCompare(a.releaseDate));
});

const filteredEntries = computed(() =>
  mergedEntries.value.filter((entry) => kindFilter.value === "All" || entry.kind === kindFilter.value),
);

const kindLabel = (kind: "All" | WritingKind) => {
  if (kind === "All") return t("publications.filterAll");

  const publicationKinds = [
    "Journal",
    "Conference",
    "Preprint",
    "Book Chapter",
    "Thesis",
    "Technical Report",
  ] as const;

  if (publicationKinds.includes(kind as (typeof publicationKinds)[number])) {
    return t(`publications.kinds.${kind}`);
  }

  return t(`articles.kinds.${kind}`);
};

const entryTagBadges = (entry: WritingEntry) =>
  entry.tags
    .map((tag) => {
      const badge = resolveKnownTechBadge(tag);
      if (!badge) return null;

      return {
        key: `${entry.id}:${tag}`,
        ...badge,
      };
    })
    .filter((badge): badge is NonNullable<typeof badge> => badge !== null);

const formattedReleaseDate = (value: string) => {
  const parsed = new Date(value);

  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  const isYearOnly = value.endsWith("-01-01");

  if (isYearOnly) {
    return String(parsed.getUTCFullYear());
  }

  return parsed.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
};
</script>

<template>
  <section id="publications" class="section-block section-anchor">
    <v-container fluid>
      <div class="section-heading reveal-up" style="--delay: 40ms">
        <p class="kicker">{{ t("publications.kicker") }}</p>
        <h2>{{ t("publications.heading") }}</h2>
      </div>

      <div class="filter-bar reveal-up" style="--delay: 100ms">
        <button
          v-for="kind in writingKinds"
          :key="kind"
          :class="['filter-btn', { active: kindFilter === kind }]"
          @click="kindFilter = kind"
        >
          {{ kindLabel(kind) }}
        </button>
      </div>

      <div class="publications-grid">
        <article
          v-for="(entry, index) in filteredEntries"
          :key="entry.id"
          class="publication-card reveal-up"
          :style="`--delay: ${160 + index * 50}ms`"
        >
          <div class="card-header">
            <div class="card-icon">
              <v-icon icon="mdi-file-document-outline" size="18" />
            </div>
            <div class="card-meta">
              <h3 class="publication-title">{{ entry.title }}</h3>
              <p class="publication-venue">{{ entry.outlet }} - {{ formattedReleaseDate(entry.releaseDate) }}</p>
            </div>
          </div>

          <div class="meta-badges">
            <span class="kind-badge">{{ kindLabel(entry.kind) }}</span>
            <span v-if="entry.doi" class="doi-badge">DOI {{ entry.doi }}</span>
          </div>

          <p class="publication-summary">{{ entry.summary }}</p>

          <div v-if="entryTagBadges(entry).length" class="tags-wrap">
            <a
              v-for="badge in entryTagBadges(entry)"
              :key="badge.key"
              :href="badge.href"
              :target="badge.href ? '_blank' : undefined"
              :rel="badge.href ? 'noreferrer' : undefined"
              class="tag-badge-link"
            >
              <img
                :src="badge.image"
                :alt="badge.label"
                :width="badge.width ?? 80"
                :height="badge.height ?? 20"
                loading="lazy"
                decoding="async"
                class="tag-badge"
              />
            </a>
          </div>

          <a
            v-if="entry.link"
            :href="entry.link"
            target="_blank"
            rel="noreferrer"
            class="publication-link"
          >
            {{ t("publications.read") }}
            <v-icon icon="mdi-arrow-top-right" size="16" />
          </a>
        </article>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.section-anchor {
  scroll-margin-top: 110px;
}

.section-block {
  padding-block: clamp(2.5rem, 6vw, 4.5rem);
}

.section-heading {
  margin-bottom: 1.5rem;
}

.section-heading h2 {
  margin: 0.3rem 0 0;
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--page-text);
}

.kicker {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary);
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.filter-btn {
  padding: 0.4rem 0.875rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--page-text-muted);
  background: transparent;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.filter-btn:hover {
  color: var(--page-text);
  background: rgba(148, 163, 184, 0.1);
}

.filter-btn.active {
  color: var(--primary);
  background: var(--primary-muted);
  border-color: rgba(34, 211, 238, 0.3);
}

.publications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 1.25rem;
}

.publication-card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  transition: border-color 0.2s ease;
}

.publication-card:hover {
  border-color: rgba(34, 211, 238, 0.3);
}

.card-header {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: var(--primary-muted);
  border-radius: 8px;
  color: var(--primary);
  flex-shrink: 0;
}

.card-meta {
  flex: 1;
  min-width: 0;
}

.publication-title {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
  color: var(--page-text);
}

.publication-venue {
  margin: 0.2rem 0 0;
  font-size: 0.8rem;
  color: var(--page-text-muted);
}

.meta-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.75rem;
}

.kind-badge {
  padding: 0.2rem 0.5rem;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--primary);
  background: var(--primary-muted);
  border-radius: 4px;
}

.doi-badge {
  padding: 0.2rem 0.5rem;
  font-size: 0.7rem;
  font-weight: 500;
  color: var(--page-text-muted);
  background: rgba(148, 163, 184, 0.1);
  border: 1px solid var(--border-color);
  border-radius: 4px;
}

.publication-summary {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--page-text-muted);
}

.tags-wrap {
  margin-top: 0.875rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag-badge-link {
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  padding-block: 2px;
  border-radius: 4px;
  transition: transform 0.15s ease, opacity 0.15s ease;
}

.tag-badge-link:hover {
  transform: translateY(-1px);
  opacity: 0.9;
}

.tag-badge {
  display: block;
  width: auto;
  height: 20px;
}

.publication-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: auto;
  padding-top: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--primary);
  text-decoration: none;
  transition: opacity 0.15s ease;
}

.publication-link:hover {
  opacity: 0.8;
}

@media (width <= 640px) {
  .publications-grid {
    grid-template-columns: 1fr;
  }
}
</style>
