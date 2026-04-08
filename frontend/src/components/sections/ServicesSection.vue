<script setup lang="ts">
import { useI18n } from "vue-i18n";

import type { ResearchService } from "@/types/site";

const props = withDefaults(defineProps<{
  services: ResearchService[];
  showHeading?: boolean;
}>(), {
  showHeading: true,
});

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <section id="services" class="section-block section-anchor">
    <v-container fluid>
      <div v-if="props.showHeading" class="section-heading reveal-up" style="--delay: 40ms">
        <p class="kicker">{{ t("services.kicker") }}</p>
        <h2>{{ t("services.heading") }}</h2>
        <p class="section-copy">{{ t("services.copy") }}</p>
      </div>

      <div class="services-grid">
        <article
          v-for="(service, index) in services"
          :key="service.title"
          class="service-card reveal-up"
          :style="`--delay: ${120 + index * 80}ms`"
        >
          <div class="card-icon">
            <v-icon :icon="service.icon" size="22" />
          </div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
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

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
  gap: 1rem;
}

.service-card {
  padding: 1.25rem;
  border: 1px solid var(--border-color);
  border-radius: 14px;
  background: rgba(30, 41, 59, 0.5);
}

.card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 11px;
  background: var(--primary-muted);
  color: var(--primary);
}

.service-title {
  margin: 0.85rem 0 0;
  font-size: 1rem;
  font-weight: 650;
  color: var(--page-text);
}

.service-description {
  margin: 0.45rem 0 0;
  font-size: 0.88rem;
  line-height: 1.65;
  color: var(--page-text-muted);
}
</style>
