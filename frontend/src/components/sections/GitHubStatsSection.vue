<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import type { GitHubStatCard } from "@/types/site";

const props = defineProps<{
  cards: GitHubStatCard[];
}>();

const { t } = useI18n({ useScope: "global" });

const topCards = computed(() => props.cards.slice(0, 2));
const streakCard = computed(() => props.cards[2]);

function hideBrokenImage(event: Event) {
  const image = event.target;
  if (!(image instanceof HTMLImageElement)) {
    return;
  }

  const wrapper = image.parentElement;
  if (wrapper) {
    wrapper.style.display = "none";
  }
}
</script>

<template>
  <section id="github" class="section-block section-anchor">
    <v-container fluid>
      <div class="section-heading reveal-up" style="--delay: 40ms">
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
          <img
            :src="card.image"
            :alt="`GitHub ${card.title} statistics`"
            :width="card.width ?? 495"
            :height="card.height ?? 195"
            loading="lazy"
            decoding="async"
            class="stat-image"
            @error="hideBrokenImage"
          />
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
            :alt="`GitHub ${streakCard.title} statistics`"
            :width="streakCard.width ?? 495"
            :height="streakCard.height ?? 195"
            loading="lazy"
            decoding="async"
            class="stat-image streak-image"
            @error="hideBrokenImage"
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

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.streak-wrap {
  margin-top: 0.8rem;
  display: flex;
  justify-content: center;
}

.stat-link {
  display: inline-block;
  width: 100%;
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
