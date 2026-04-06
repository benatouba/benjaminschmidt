<script setup lang="ts">
import { resolveKnownTechBadge } from "@/data/techBadges";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

import type { ArticleHistoryItem } from "@/types/site";

const props = defineProps<{
  items: ArticleHistoryItem[];
}>();

const { t } = useI18n({ useScope: "global" });

const filters = ["All", "Article", "Interview", "Editorial", "Review"] as const;
const selected = ref<(typeof filters)[number]>("All");

const visibleItems = computed(() =>
  props.items.filter((item) => selected.value === "All" || item.kind === selected.value),
);

const filterLabel = (kind: string) => {
  if (kind === "All") return t("articles.filterAll");
  return t(`articles.kinds.${kind}`);
};

const itemTagBadges = (item: ArticleHistoryItem) =>
  item.tags
    .map((tag) => {
      const badge = resolveKnownTechBadge(tag);
      if (!badge) return null;

      return {
        key: `${item.title}-${tag}`,
        ...badge,
      };
    })
    .filter((badge): badge is NonNullable<typeof badge> => badge !== null);
</script>

<template>
  <section id="articles" class="section-block section-anchor">
    <v-container fluid>
      <div class="section-heading reveal-up" style="--delay: 40ms">
        <p class="kicker">{{ t("articles.kicker") }}</p>
        <h2>{{ t("articles.heading") }}</h2>
      </div>

      <div class="filter-bar reveal-up" style="--delay: 100ms">
        <button
          v-for="kind in filters"
          :key="kind"
          :class="['filter-btn', { active: selected === kind }]"
          @click="selected = kind"
        >
          {{ filterLabel(kind) }}
        </button>
      </div>

      <div class="articles-grid">
        <article
          v-for="(item, index) in visibleItems"
          :key="`${item.title}-${item.published}`"
          class="article-card reveal-up"
          :style="`--delay: ${150 + index * 70}ms`"
        >
          <div class="card-header">
            <div class="card-icon">
              <v-icon icon="mdi-newspaper-variant-outline" size="18" />
            </div>
            <div class="card-meta">
              <h3 class="article-title">{{ item.title }}</h3>
              <p class="article-outlet">{{ item.outlet }} · {{ item.published }}</p>
            </div>
            <span class="kind-badge">{{ t(`articles.kinds.${item.kind}`) }}</span>
          </div>

          <p class="article-summary">{{ item.summary }}</p>

          <div v-if="itemTagBadges(item).length" class="tags-wrap">
            <a
              v-for="badge in itemTagBadges(item)"
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
            v-if="item.link"
            :href="item.link"
            target="_blank"
            rel="noreferrer"
            class="article-link"
          >
            {{ t("articles.open") }}
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

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 1.25rem;
}

.article-card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  transition: border-color 0.2s ease;
}

.article-card:hover {
  border-color: rgba(34, 211, 238, 0.3);
}

.card-header {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  align-items: flex-start;
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

.article-title {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
  color: var(--page-text);
}

.article-outlet {
  margin: 0.2rem 0 0;
  font-size: 0.8rem;
  color: var(--page-text-muted);
}

.kind-badge {
  flex-shrink: 0;
  padding: 0.2rem 0.5rem;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--primary);
  background: var(--primary-muted);
  border-radius: 4px;
}

.article-summary {
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

.article-link {
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

.article-link:hover {
  opacity: 0.8;
}

@media (width <= 640px) {
  .articles-grid {
    grid-template-columns: 1fr;
  }
}
</style>
