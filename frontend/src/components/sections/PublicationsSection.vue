<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

import type { PublicationItem } from "@/types/site";

const props = defineProps<{
  publications: PublicationItem[];
}>();

const { t } = useI18n({ useScope: "global" });

const kindFilter = ref<"All" | PublicationItem["kind"]>("All");
const publicationKinds: Array<"All" | PublicationItem["kind"]> = [
  "All",
  "Journal",
  "Conference",
  "Preprint",
  "Book Chapter",
];

const filteredPublications = computed(() =>
  props.publications.filter(
    (entry) => kindFilter.value === "All" || entry.kind === kindFilter.value,
  ),
);

const kindLabel = (kind: string) => {
  if (kind === "All") return t("publications.filterAll");
  return t(`publications.kinds.${kind}`);
};
</script>

<template>
  <section id="publications" class="section-block section-anchor">
    <v-container class="px-4 px-sm-6 px-md-8" fluid>
      <div class="section-heading reveal-up" style="--delay: 40ms">
        <p class="kicker">{{ t("publications.kicker") }}</p>
        <h2>{{ t("publications.heading") }}</h2>
      </div>

      <div class="filter-bar reveal-up" style="--delay: 100ms">
        <button
          v-for="kind in publicationKinds"
          :key="kind"
          :class="['filter-btn', { active: kindFilter === kind }]"
          @click="kindFilter = kind"
        >
          {{ kindLabel(kind) }}
        </button>
      </div>

      <div class="publications-grid">
        <article
          v-for="(publication, index) in filteredPublications"
          :key="`${publication.title}-${publication.year}`"
          class="publication-card reveal-up"
          :style="`--delay: ${160 + index * 70}ms`"
        >
          <div class="card-header">
            <div class="card-icon">
              <v-icon icon="mdi-file-document-outline" size="18" />
            </div>
            <div class="card-meta">
              <h3 class="publication-title">{{ publication.title }}</h3>
              <p class="publication-venue">{{ publication.venue }} - {{ publication.year }}</p>
            </div>
          </div>

          <div class="meta-badges">
            <span class="kind-badge">{{ t(`publications.kinds.${publication.kind}`) }}</span>
            <span v-if="publication.doi" class="doi-badge">DOI {{ publication.doi }}</span>
          </div>

          <p class="publication-summary">{{ publication.summary }}</p>

          <div class="tags-wrap">
            <span
              v-for="tag in publication.tags"
              :key="tag"
              class="pub-tag"
            >
              {{ tag }}
            </span>
          </div>

          <a
            v-if="publication.link"
            :href="publication.link"
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
  gap: 0.35rem;
}

.pub-tag {
  padding: 0.2rem 0.5rem;
  font-size: 0.7rem;
  font-weight: 500;
  color: var(--page-text-muted);
  border: 1px solid var(--border-color);
  border-radius: 4px;
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
