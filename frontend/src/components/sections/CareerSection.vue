<script setup lang="ts">
import { useI18n } from "vue-i18n";

import type { CareerStage } from "@/types/site";

const props = defineProps<{
  stages: CareerStage[];
}>();

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <section id="career" class="section-block section-anchor">
    <v-container class="px-4 px-sm-6 px-md-8" fluid>
      <div class="section-heading reveal-up" style="--delay: 40ms">
        <p class="kicker">{{ t("career.kicker") }}</p>
        <h2>{{ t("career.heading") }}</h2>
      </div>

      <v-timeline
        side="end"
        line-inset="16"
        density="compact"
        class="career-timeline reveal-up"
        style="--delay: 120ms"
      >
        <v-timeline-item
          v-for="(stage, index) in props.stages"
          :key="`${stage.period}-${stage.title}`"
          dot-color="primary"
          fill-dot
          :icon="index === 0 ? 'mdi-star-four-points-circle-outline' : 'mdi-briefcase-outline'"
          size="small"
        >
          <template #opposite>
            <span class="period">{{ stage.period }}</span>
          </template>

          <v-card class="timeline-card" variant="tonal" color="surface">
            <v-card-title class="timeline-title">{{ stage.title }}</v-card-title>
            <v-card-subtitle>{{ stage.institution }}</v-card-subtitle>
            <v-card-text>
              <p class="timeline-summary">{{ stage.description }}</p>
              <div class="focus-wrap">
                <v-chip
                  v-for="focus in stage.focusAreas"
                  :key="focus"
                  size="x-small"
                  color="secondary"
                  variant="outlined"
                >
                  {{ focus }}
                </v-chip>
              </div>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </section>
</template>

<style scoped>
.section-anchor {
  scroll-margin-top: 110px;
}

.section-block {
  padding-block: clamp(2rem, 5vw, 3.5rem);
}

.section-heading h2 {
  margin: 0.25rem 0 0;
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 2.6vw, 2.1rem);
  color: rgb(8 34 42);
}

.kicker {
  margin: 0;
  font-size: 0.82rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgb(90 125 124);
}

.career-timeline {
  margin-top: 1.35rem;
}

.period {
  font-size: 0.88rem;
  font-weight: 700;
  color: rgb(15 76 92);
}

.timeline-card {
  border: 1px solid rgb(15 76 92 / 16%);
}

.timeline-title {
  font-size: 1.08rem;
}

.timeline-summary {
  margin: 0;
  color: rgb(13 52 63 / 88%);
}

.focus-wrap {
  margin-top: 0.85rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
</style>
