<script setup lang="ts">
import { useI18n } from "vue-i18n";

import type { SkillBadge } from "@/types/site";

const props = defineProps<{
  badges: SkillBadge[];
}>();

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <section id="skills" class="section-block section-anchor">
    <v-container class="px-4 px-sm-6 px-md-8" fluid>
      <div class="section-heading reveal-up" style="--delay: 40ms">
        <p class="kicker">{{ t("skills.kicker") }}</p>
        <h2>{{ t("skills.heading") }}</h2>
        <p class="section-copy">{{ t("skills.copy") }}</p>
      </div>

      <div class="badges-grid reveal-up" style="--delay: 120ms">
        <a
          v-for="badge in props.badges"
          :key="badge.label"
          :href="badge.href"
          :target="badge.href ? '_blank' : undefined"
          :rel="badge.href ? 'noreferrer' : undefined"
          class="badge-link"
        >
          <img
            :src="badge.image"
            :alt="badge.label"
            :width="badge.width ?? 80"
            :height="badge.height ?? 20"
            loading="lazy"
            decoding="async"
            class="badge-image"
          />
        </a>
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

.section-copy {
  margin: 0.75rem 0 0;
  max-width: 70ch;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--page-text-muted);
}

.badges-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.badge-link {
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  padding-block: 2px;
  border-radius: 4px;
  transition: transform 0.15s ease, opacity 0.15s ease;
}

.badge-link:hover {
  transform: translateY(-1px);
  opacity: 0.9;
}

.badge-image {
  display: block;
  width: auto;
  height: 20px;
}

@media (width <= 640px) {
  .badge-image {
    height: 18px;
  }
}
</style>
