<script setup lang="ts">
import { useI18n } from "vue-i18n";

import type { ResearchService } from "@/types/site";

defineProps<{
  items: ResearchService[];
}>();

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <section id="infrastructure" class="section-block section-anchor">
    <v-container fluid>
      <div class="section-heading reveal-up" style="--delay: 40ms">
        <p class="kicker">{{ t("infrastructure.kicker") }}</p>
        <h2>{{ t("infrastructure.heading") }}</h2>
        <p class="section-copy">{{ t("infrastructure.copy") }}</p>
      </div>

      <div class="infra-grid">
        <article
          v-for="(item, index) in items"
          :key="item.title"
          class="infra-card reveal-up"
          :style="`--delay: ${120 + index * 70}ms`"
        >
          <div class="card-icon">
            <v-icon :icon="item.icon" size="20" />
          </div>
          <h3 class="infra-title">{{ item.title }}</h3>
          <p class="infra-description">{{ item.description }}</p>
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

.infra-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
  gap: 1rem;
}

.infra-card {
  padding: 1.15rem;
  border: 1px solid var(--border-color);
  border-radius: 14px;
  background: rgba(49, 50, 68, 0.56);
}

.card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--primary-muted);
  color: var(--primary);
}

.infra-title {
  margin: 0.8rem 0 0;
  font-size: 1rem;
  font-weight: 650;
  color: var(--page-text);
}

.infra-description {
  margin: 0.45rem 0 0;
  font-size: 0.88rem;
  line-height: 1.65;
  color: var(--page-text-muted);
}
</style>
