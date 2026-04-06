<script setup lang="ts">
import { useI18n } from "vue-i18n";

import type { ResearchService } from "@/types/site";

const props = defineProps<{
  services: ResearchService[];
}>();

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <section id="services" class="section-block section-anchor">
    <v-container fluid>
      <div class="section-heading reveal-up" style="--delay: 40ms">
        <p class="kicker">{{ t("services.kicker") }}</p>
        <h2>{{ t("services.heading") }}</h2>
      </div>

      <div class="services-grid">
        <article
          v-for="(service, index) in props.services"
          :key="service.title"
          class="service-card reveal-up"
          :style="`--delay: ${120 + index * 80}ms`"
        >
          <div class="card-icon">
            <v-icon :icon="service.icon" size="24" />
          </div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-audience">{{ service.audience }}</p>
          <p class="service-description">{{ service.description }}</p>
          <a
            :href="service.ctaHref"
            class="service-cta"
          >
            <v-icon icon="mdi-send-outline" size="16" />
            {{ service.ctaLabel }}
          </a>
        </article>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.section-heading h2 {
  margin: 0.3rem 0 0;
}

.kicker {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.25rem;
}

.service-card {
  display: flex;
  flex-direction: column;
  padding: 1.75rem;
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.service-card:hover {
  border-color: rgba(34, 211, 238, 0.3);
  transform: translateY(-2px);
}

.card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
  background: var(--primary-muted);
  border-radius: 12px;
  color: var(--primary);
}

.service-title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--page-text);
}

.service-audience {
  margin: 0.25rem 0 0;
  font-size: 0.8rem;
  color: var(--page-text-muted);
}

.service-description {
  margin: 0.75rem 0 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--page-text-muted);
  flex: 1;
}

.service-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.25rem;
  padding: 0.6rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--page-background);
  background: var(--primary);
  border-radius: 8px;
  text-decoration: none;
  transition: opacity 0.15s ease;
  width: fit-content;
}

.service-cta:hover {
  opacity: 0.9;
}
</style>
