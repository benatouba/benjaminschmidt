<script setup lang="ts">
import { resolveKnownTechBadge } from "@/data/techBadges";
import { useI18n } from "vue-i18n";

import type { CareerStage } from "@/types/site";

const props = defineProps<{
  stages: CareerStage[];
}>();

const { t } = useI18n({ useScope: "global" });

const stageFocusBadges = (stage: CareerStage) =>
  stage.focusAreas
    .map((focus) => {
      const badge = resolveKnownTechBadge(focus);
      if (!badge) return null;

      return {
        key: `${stage.title}-${focus}`,
        ...badge,
      };
    })
    .filter((badge): badge is NonNullable<typeof badge> => badge !== null);
</script>

<template>
  <section id="career" class="section-block section-anchor">
    <v-container class="px-4 px-sm-6 px-md-8" fluid>
      <div class="section-heading reveal-up" style="--delay: 40ms">
        <p class="kicker">{{ t("career.kicker") }}</p>
        <h2>{{ t("career.heading") }}</h2>
      </div>

      <div class="timeline reveal-up" style="--delay: 120ms">
        <div
          v-for="(stage, index) in props.stages"
          :key="`${stage.period}-${stage.title}`"
          class="timeline-item"
        >
          <div class="timeline-marker">
            <div :class="['marker-dot', { current: index === 0 }]">
              <v-icon
                :icon="index === 0 ? 'mdi-star-four-points' : 'mdi-briefcase-outline'"
                size="14"
              />
            </div>
            <div class="marker-line"></div>
          </div>

          <div class="timeline-content">
            <span class="period">{{ stage.period }}</span>
            <div class="timeline-card">
              <h3 class="card-title">{{ stage.title }}</h3>
              <p class="card-institution">{{ stage.institution }}</p>
              <p class="card-description">{{ stage.description }}</p>
              <div v-if="stageFocusBadges(stage).length" class="focus-wrap">
                <a
                  v-for="badge in stageFocusBadges(stage)"
                  :key="badge.key"
                  :href="badge.href"
                  :target="badge.href ? '_blank' : undefined"
                  :rel="badge.href ? 'noreferrer' : undefined"
                  class="focus-badge-link"
                >
                  <img
                    :src="badge.image"
                    :alt="badge.label"
                    :width="badge.width ?? 80"
                    :height="badge.height ?? 20"
                    loading="lazy"
                    decoding="async"
                    class="focus-badge"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
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
  margin-bottom: 2rem;
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

.timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.timeline-item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.25rem;
}

.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.25rem;
}

.marker-dot {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: var(--surface);
  border: 2px solid var(--border-color);
  border-radius: 50%;
  color: var(--page-text-muted);
  flex-shrink: 0;
}

.marker-dot.current {
  background: var(--primary-muted);
  border-color: var(--primary);
  color: var(--primary);
}

.marker-line {
  flex: 1;
  width: 2px;
  background: var(--border-color);
  margin-top: 0.5rem;
}

.timeline-item:last-child .marker-line {
  display: none;
}

.timeline-content {
  padding-bottom: 2rem;
}

.period {
  display: inline-block;
  margin-bottom: 0.75rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--primary);
}

.timeline-card {
  padding: 1.25rem 1.5rem;
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid var(--border-color);
  border-radius: 12px;
}

.card-title {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--page-text);
}

.card-institution {
  margin: 0.25rem 0 0;
  font-size: 0.875rem;
  color: var(--page-text-muted);
}

.card-description {
  margin: 0.75rem 0 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--page-text-muted);
}

.focus-wrap {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.focus-badge-link {
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  padding-block: 2px;
  border-radius: 4px;
  transition: transform 0.15s ease, opacity 0.15s ease;
}

.focus-badge-link:hover {
  transform: translateY(-1px);
  opacity: 0.9;
}

.focus-badge {
  display: block;
  width: auto;
  height: 20px;
}

@media (width <= 640px) {
  .timeline-item {
    gap: 1rem;
  }

  .timeline-card {
    padding: 1rem;
  }
}
</style>
