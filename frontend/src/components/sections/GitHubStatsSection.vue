<script setup lang="ts">
import { useI18n } from "vue-i18n";

import type { GitHubStatCard } from "@/types/site";

const props = defineProps<{
  cards: GitHubStatCard[];
}>();

const { t } = useI18n({ useScope: "global" });

const topCards = props.cards.slice(0, 2);
const streakCard = props.cards[2];
</script>

<template>
  <section id="github" class="section-block section-anchor">
    <v-container class="px-4 px-sm-6 px-md-8" fluid>
      <div class="section-heading reveal-up" style="--delay: 40ms">
        <p class="kicker">{{ t("github.kicker") }}</p>
        <h2>{{ t("github.heading") }}</h2>
      </div>

      <div class="stats-grid reveal-up" style="--delay: 120ms">
        <a
          v-for="card in topCards"
          :key="card.title"
          :href="card.href"
          :target="card.href ? '_blank' : undefined"
          :rel="card.href ? 'noreferrer' : undefined"
          class="stat-link"
        >
          <img :src="card.image" :alt="card.title" loading="lazy" class="stat-image" />
        </a>
      </div>

      <div v-if="streakCard" class="streak-wrap reveal-up" style="--delay: 180ms">
        <a
          :href="streakCard.href"
          :target="streakCard.href ? '_blank' : undefined"
          :rel="streakCard.href ? 'noreferrer' : undefined"
          class="stat-link"
        >
          <img
            :src="streakCard.image"
            :alt="streakCard.title"
            loading="lazy"
            class="stat-image streak-image"
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

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.streak-wrap {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}

.stat-link {
  display: block;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  background: rgba(15, 23, 42, 0.42);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.stat-link:hover {
  transform: translateY(-2px);
  border-color: rgba(34, 211, 238, 0.35);
}

.stat-image {
  width: 100%;
  height: auto;
  display: block;
}

.streak-image {
  max-width: 780px;
}

@media (width <= 860px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .streak-wrap {
    justify-content: stretch;
  }

  .streak-image {
    max-width: unset;
  }
}
</style>
