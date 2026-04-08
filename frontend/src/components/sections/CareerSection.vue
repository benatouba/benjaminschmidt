<script setup lang="ts">
import { useI18n } from "vue-i18n";

import type { CareerStage } from "@/types/site";

const props = withDefaults(defineProps<{
  stages: CareerStage[];
  showHeading?: boolean;
}>(), {
  showHeading: true,
});

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <section id="career" class="section-block section-anchor">
    <v-container fluid>
      <div v-if="props.showHeading" class="section-heading reveal-up" style="--delay: 40ms">
        <p class="kicker">{{ t("career.kicker") }}</p>
        <h2>{{ t("career.heading") }}</h2>
        <p class="section-copy">{{ t("career.copy") }}</p>
      </div>

      <div class="timeline reveal-up" style="--delay: 120ms">
        <article
          v-for="(stage, index) in stages"
          :key="`${stage.period}-${stage.title}`"
          class="timeline-card"
        >
          <div class="timeline-top">
            <div>
              <p class="period">{{ stage.period }}</p>
              <h3 class="card-title">{{ stage.title }}</h3>
              <p class="card-institution">{{ stage.institution }}</p>
            </div>
            <div class="card-marker">
              <v-icon :icon="index === 0 ? 'mdi-star-four-points' : 'mdi-briefcase-outline'" size="16" />
            </div>
          </div>

          <p class="card-description">{{ stage.description }}</p>

          <ul class="focus-list">
            <li v-for="focus in stage.focusAreas" :key="focus">{{ focus }}</li>
          </ul>
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

.timeline {
  display: grid;
  gap: 1rem;
}

.timeline-card {
  padding: 1.15rem 1.2rem;
  border: 1px solid var(--border-color);
  border-radius: 14px;
  background: rgba(30, 41, 59, 0.5);
}

.timeline-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.8rem;
}

.period {
  margin: 0;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary);
}

.card-title {
  margin: 0.35rem 0 0;
  font-size: 1.05rem;
  font-weight: 650;
  color: var(--page-text);
}

.card-institution {
  margin: 0.22rem 0 0;
  font-size: 0.86rem;
  color: var(--page-text-muted);
}

.card-marker {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--primary-muted);
  color: var(--primary);
}

.card-description {
  margin: 0.7rem 0 0;
  font-size: 0.9rem;
  line-height: 1.65;
  color: var(--page-text-muted);
}

.focus-list {
  margin: 0.8rem 0 0;
  padding: 0 0 0 1.05rem;
  font-size: 0.84rem;
  line-height: 1.7;
  color: var(--page-text-muted);
}
</style>
