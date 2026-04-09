<script setup lang="ts">
import { computed, ref, watchEffect } from "vue";
import { useI18n } from "vue-i18n";

import type { PublicationInsight, PublicationKind } from "@/types/site";

const props = defineProps<{
  insights: PublicationInsight[];
}>();

const { t } = useI18n({ useScope: "global" });

const kindFilter = ref<"All" | PublicationKind>("All");

const preferredKinds: PublicationKind[] = [
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

const writingKinds = computed<Array<"All" | PublicationKind>>(() => [
  "All",
  ...preferredKinds.filter((kind) =>
    props.insights.some((entry) => entry.kind === kind),
  ),
]);

const filteredEntries = computed(() =>
  props.insights.filter(
    (entry) => kindFilter.value === "All" || entry.kind === kindFilter.value,
  ),
);

watchEffect(() => {
  if (
    kindFilter.value !== "All" &&
    !writingKinds.value.includes(kindFilter.value)
  ) {
    kindFilter.value = "All";
  }
});

const kindLabel = (kind: "All" | PublicationKind) => {
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
</script>

<template>
  <section id="publications" class="section-block section-anchor">
    <v-container fluid>
      <div class="section-heading reveal-up" style="--delay: 40ms">
        <p class="kicker">{{ t("publications.kicker") }}</p>
        <h2>{{ t("publications.heading") }}</h2>
        <p class="section-copy">{{ t("publications.copy") }}</p>
      </div>

      <div
        v-if="insights.length"
        class="filter-bar reveal-up"
        style="--delay: 100ms"
      >
        <button
          v-for="kind in writingKinds"
          :key="kind"
          :class="['filter-btn', { active: kindFilter === kind }]"
          @click="kindFilter = kind"
        >
          {{ kindLabel(kind) }}
        </button>
      </div>

      <div v-if="filteredEntries.length" class="publications-grid">
        <article
          v-for="(entry, index) in filteredEntries"
          :key="entry.slug"
          class="publication-card reveal-up"
          :style="`--delay: ${160 + index * 50}ms`"
        >
          <div class="card-header">
            <div class="card-icon">
              <v-icon icon="mdi-file-document-outline" size="18" />
            </div>
            <div class="card-meta">
              <p class="publication-venue">
                {{ entry.outlet }} · {{ entry.published.slice(0, 4) }}
              </p>
              <h3 class="publication-title">{{ entry.title }}</h3>
              <p v-if="entry.authors" class="publication-authors">
                {{ entry.authors }}
              </p>
            </div>
          </div>

          <div class="meta-badges">
            <span class="kind-badge">{{ kindLabel(entry.kind) }}</span>
            <span v-if="entry.doi" class="doi-badge"
              >{{ t("publications.doi") }} {{ entry.doi }}</span
            >
          </div>

          <p class="publication-summary">{{ entry.oneLiner }}</p>

          <ul class="findings-list">
            <li v-for="finding in entry.findings.slice(0, 3)" :key="finding">
              {{ finding }}
            </li>
          </ul>

          <div class="metrics-wrap">
            <span
              v-for="metric in entry.metrics.slice(0, 3)"
              :key="metric"
              class="metric-chip"
              >{{ metric }}</span
            >
          </div>

          <RouterLink
            :to="`/publications/${entry.slug}`"
            class="publication-link"
          >
            {{ t("publications.read") }}
            <v-icon icon="mdi-arrow-right" size="16" />
          </RouterLink>
        </article>
      </div>

      <div v-else class="empty-state reveal-up" style="--delay: 160ms">
        <p>{{ t("publications.empty") }}</p>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.kicker {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary);
}

.section-copy {
  margin: 0.55rem 0 0;
  max-width: 70ch;
  font-size: 0.96rem;
  line-height: 1.7;
  color: var(--page-text-muted);
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.1rem;
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
}

.filter-btn.active {
  color: var(--primary);
  background: var(--primary-muted);
  border-color: rgba(250, 179, 135, 0.52);
}

.publications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(360px, 100%), 1fr));
  gap: 1rem;
}

.publication-card {
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  background: rgba(49, 50, 68, 0.56);
}

.card-header {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 0.65rem;
}

.card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: var(--primary-muted);
  color: var(--primary);
  flex-shrink: 0;
}

.card-meta {
  min-width: 0;
}

.publication-venue {
  margin: 0;
  font-size: 0.76rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary);
}

.publication-title {
  margin: 0.35rem 0 0;
  font-size: 1rem;
  font-weight: 650;
  line-height: 1.45;
  color: var(--page-text);
}

.publication-authors {
  margin: 0.35rem 0 0;
  font-size: 0.78rem;
  line-height: 1.55;
  color: var(--page-text-muted);
}

.meta-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.75rem;
}

.kind-badge,
.doi-badge,
.metric-chip {
  padding: 0.22rem 0.55rem;
  border-radius: 999px;
  font-size: 0.74rem;
}

.kind-badge {
  color: var(--primary);
  background: var(--primary-muted);
}

.doi-badge,
.metric-chip {
  color: var(--page-text-muted);
  background: rgba(166, 173, 200, 0.12);
  border: 1px solid var(--border-color);
}

.publication-summary {
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.65;
  color: var(--page-text-muted);
}

.findings-list {
  margin: 0.75rem 0 0;
  padding: 0 0 0 1.05rem;
  font-size: 0.84rem;
  line-height: 1.7;
  color: var(--page-text-muted);
}

.metrics-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.8rem;
}

.publication-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: auto;
  padding-top: 0.9rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--primary);
  text-decoration: none;
}

.empty-state {
  padding: 1.1rem 1.15rem;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  background: rgba(49, 50, 68, 0.56);
}

.empty-state p {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.7;
  color: var(--page-text-muted);
}

@media (width <= 640px) {
  .publications-grid {
    grid-template-columns: 1fr;
  }
}
</style>
