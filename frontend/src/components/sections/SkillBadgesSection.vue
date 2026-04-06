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
    <v-container fluid>
      <div class="section-heading reveal-up" style="--delay: 40ms">
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
.section-heading {
  margin-bottom: 1.1rem;
}

.section-copy {
  margin: 0.55rem 0 0;
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
