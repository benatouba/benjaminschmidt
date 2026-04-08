<script setup lang="ts">
import { useI18n } from "vue-i18n";

import type { ImpactHighlight } from "@/types/site";

defineProps<{
  highlights: ImpactHighlight[];
}>();

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <section id="impact" class="section-block section-anchor">
    <v-container fluid>
      <div class="section-heading reveal-up" style="--delay: 40ms">
        <p class="kicker">{{ t("impact.kicker") }}</p>
        <h2>{{ t("impact.heading") }}</h2>
        <p class="section-copy">{{ t("impact.copy") }}</p>
      </div>

      <div class="impact-grid">
        <article
          v-for="(item, index) in highlights"
          :key="`${item.value}-${item.label}`"
          class="impact-card reveal-up"
          :style="`--delay: ${120 + index * 70}ms`"
        >
          <div class="card-icon">
            <v-icon :icon="item.icon" size="18" />
          </div>
          <p class="impact-value">{{ item.value }}</p>
          <h3 class="impact-label">{{ item.label }}</h3>
          <p class="impact-detail">{{ item.detail }}</p>
        </article>
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

.impact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(220px, 100%), 1fr));
  gap: 1rem;
}

.impact-card {
  padding: 1.1rem;
  border: 1px solid var(--border-color);
  border-radius: 14px;
  background: rgba(30, 41, 59, 0.5);
}

.card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: var(--primary-muted);
  color: var(--primary);
}

.impact-value {
  margin: 0.8rem 0 0;
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--page-text);
}

.impact-label {
  margin: 0.25rem 0 0;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--page-text);
}

.impact-detail {
  margin: 0.45rem 0 0;
  font-size: 0.84rem;
  line-height: 1.6;
  color: var(--page-text-muted);
}
</style>
