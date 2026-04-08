<script setup lang="ts">
import { useI18n } from "vue-i18n";

import type { PublicationInsight } from "@/types/site";

defineProps<{
  insights: PublicationInsight[];
}>();

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <section id="publication-highlights" class="section-block section-anchor">
    <v-container fluid>
      <div class="section-heading reveal-up" style="--delay: 40ms">
        <p class="kicker">{{ t("publicationHighlights.kicker") }}</p>
        <h2>{{ t("publicationHighlights.heading") }}</h2>
        <p class="section-copy">{{ t("publicationHighlights.copy") }}</p>
      </div>

      <div class="highlights-grid">
        <article
          v-for="(item, index) in insights"
          :key="item.slug"
          class="highlight-card reveal-up"
          :style="`--delay: ${120 + index * 70}ms`"
        >
          <p class="highlight-outlet">{{ item.outlet }} · {{ item.published.slice(0, 4) }}</p>
          <h3 class="highlight-title">{{ item.title }}</h3>
          <p class="highlight-oneliner">{{ item.oneLiner }}</p>

          <ul class="findings-list">
            <li v-for="finding in item.findings.slice(0, 2)" :key="finding">{{ finding }}</li>
          </ul>

          <RouterLink :to="`/publications/${item.slug}`" class="detail-link">
            {{ t("publicationHighlights.openDetail") }}
            <v-icon icon="mdi-arrow-right" size="16" />
          </RouterLink>
        </article>
      </div>

      <div v-if="insights.length" class="section-footer reveal-up" style="--delay: 420ms">
        <RouterLink to="/publications" class="section-link">
          {{ t("publicationHighlights.viewAll") }}
          <v-icon icon="mdi-arrow-right" size="16" />
        </RouterLink>
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
  max-width: 68ch;
  font-size: 0.96rem;
  line-height: 1.7;
  color: var(--page-text-muted);
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
  gap: 1rem;
}

.highlight-card {
  display: flex;
  flex-direction: column;
  padding: 1.15rem;
  border: 1px solid var(--border-color);
  border-radius: 14px;
  background: rgba(30, 41, 59, 0.5);
}

.highlight-outlet {
  margin: 0;
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary);
}

.highlight-title {
  margin: 0.5rem 0 0;
  font-size: 1.02rem;
  font-weight: 650;
  line-height: 1.4;
  color: var(--page-text);
}

.highlight-oneliner {
  margin: 0.6rem 0 0;
  font-size: 0.88rem;
  line-height: 1.65;
  color: var(--page-text-muted);
}

.findings-list {
  margin: 0.75rem 0 0;
  padding: 0 0 0 1.05rem;
  font-size: 0.84rem;
  line-height: 1.65;
  color: var(--page-text-muted);
}

.detail-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: auto;
  padding-top: 0.9rem;
  font-size: 0.87rem;
  font-weight: 600;
  color: var(--primary);
  text-decoration: none;
}

.section-footer {
  display: flex;
  justify-content: flex-start;
  margin-top: 1rem;
}

.section-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--primary);
  text-decoration: none;
}
</style>
