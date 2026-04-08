<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import type { PublicationInsight } from "@/types/site";

const props = defineProps<{
  insight: PublicationInsight;
}>();

const { t } = useI18n({ useScope: "global" });

const publishedYear = computed(() => props.insight.published.slice(0, 4));
const doiHref = computed(() =>
  props.insight.doi ? `https://doi.org/${props.insight.doi}` : undefined,
);
const publicationHref = computed(() => props.insight.link ?? doiHref.value);
const showDoiLink = computed(
  () => Boolean(props.insight.link && doiHref.value && props.insight.link !== doiHref.value),
);
</script>

<template>
  <section id="publication-detail" class="section-block section-anchor">
    <v-container fluid>
      <div class="detail-hero reveal-up" style="--delay: 40ms">
        <RouterLink to="/publications" class="back-link">
          <v-icon icon="mdi-arrow-left" size="16" />
          {{ t("publicationDetail.backToPublications") }}
        </RouterLink>
        <p class="detail-meta">{{ insight.outlet }} · {{ publishedYear }}</p>
        <h2 class="detail-title">{{ insight.title }}</h2>
        <p v-if="insight.authors" class="detail-authors">{{ insight.authors }}</p>
        <p class="detail-lead">{{ insight.oneLiner }}</p>
        <p class="detail-summary">{{ insight.summary }}</p>

        <div class="detail-links">
          <a v-if="publicationHref" :href="publicationHref" target="_blank" rel="noreferrer" class="primary-link">
            {{ t("publicationDetail.openSource") }}
          </a>
          <a v-if="showDoiLink && doiHref" :href="doiHref" target="_blank" rel="noreferrer" class="secondary-link">
            {{ t("publicationDetail.openDoi") }}
          </a>
        </div>
      </div>

      <div class="detail-grid">
        <article class="detail-card reveal-up" style="--delay: 100ms">
          <p class="card-kicker">{{ t("publicationDetail.mainFindings") }}</p>
          <ul class="detail-list">
            <li v-for="finding in insight.findings" :key="finding">{{ finding }}</li>
          </ul>
        </article>

        <article class="detail-card reveal-up" style="--delay: 140ms">
          <p class="card-kicker">{{ t("publicationDetail.whyItMatters") }}</p>
          <p class="detail-copy">{{ insight.whyItMatters }}</p>
        </article>

        <article class="detail-card reveal-up" style="--delay: 180ms">
          <p class="card-kicker">{{ t("publicationDetail.recruiterTakeaway") }}</p>
          <p class="detail-copy">{{ insight.recruiterTakeaway }}</p>
        </article>
      </div>

      <div v-if="insight.metrics.length" class="metrics-card reveal-up" style="--delay: 220ms">
        <p class="card-kicker">{{ t("publicationDetail.keyMetrics") }}</p>
        <div class="metrics-grid">
          <span v-for="metric in insight.metrics" :key="metric" class="metric-chip">{{ metric }}</span>
        </div>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.detail-hero,
.detail-card,
.metrics-card {
  padding: 1.2rem;
  border: 1px solid var(--border-color);
  border-radius: 14px;
  background: rgba(30, 41, 59, 0.5);
}

.detail-meta,
.card-kicker {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary);
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-bottom: 0.9rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--primary);
  text-decoration: none;
}

.detail-title {
  margin: 0.6rem 0 0;
  font-size: clamp(1.7rem, 3vw, 2.35rem);
  line-height: 1.18;
  letter-spacing: -0.02em;
  color: var(--page-text);
}

.detail-authors {
  margin: 0.55rem 0 0;
  font-size: 0.86rem;
  line-height: 1.6;
  color: var(--page-text-muted);
}

.detail-lead {
  margin: 0.8rem 0 0;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--page-text);
}

.detail-summary,
.detail-copy {
  margin: 0.7rem 0 0;
  font-size: 0.94rem;
  line-height: 1.75;
  color: var(--page-text-muted);
}

.detail-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
}

.primary-link,
.secondary-link {
  display: inline-flex;
  align-items: center;
  padding: 0.7rem 1rem;
  border-radius: 10px;
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 600;
}

.primary-link {
  color: #0f172a;
  background: var(--primary);
}

.secondary-link {
  color: var(--page-text);
  background: rgba(148, 163, 184, 0.08);
  border: 1px solid var(--border-color);
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.detail-list {
  margin: 0.7rem 0 0;
  padding: 0 0 0 1.1rem;
  font-size: 0.88rem;
  line-height: 1.75;
  color: var(--page-text-muted);
}

.metrics-card {
  margin-top: 1rem;
}

.metrics-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 0.8rem;
}

.metric-chip {
  display: inline-flex;
  align-items: center;
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  border: 1px solid var(--border-color);
  background: rgba(148, 163, 184, 0.08);
  color: var(--page-text);
  font-size: 0.82rem;
  font-weight: 500;
}

@media (width <= 920px) {
  .detail-grid {
    grid-template-columns: 1fr;
  }
}
</style>
