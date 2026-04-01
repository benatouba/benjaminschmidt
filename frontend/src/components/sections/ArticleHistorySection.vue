<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

import type { ArticleHistoryItem } from "@/types/site";

const props = defineProps<{
  items: ArticleHistoryItem[];
}>();

const { t } = useI18n({ useScope: "global" });

const filters = ["All", "Article", "Interview", "Editorial", "Review"] as const;
const selected = ref<(typeof filters)[number]>("All");

const visibleItems = computed(() =>
  props.items.filter((item) => selected.value === "All" || item.kind === selected.value),
);

const filterLabel = (kind: string) => {
  if (kind === "All") return t("articles.filterAll");
  return t(`articles.kinds.${kind}`);
};
</script>

<template>
  <section id="articles" class="section-block section-anchor article-shell">
    <v-container class="px-4 px-sm-6 px-md-8" fluid>
      <div class="section-heading reveal-up" style="--delay: 40ms">
        <p class="kicker">{{ t("articles.kicker") }}</p>
        <h2>{{ t("articles.heading") }}</h2>
      </div>

      <div class="reveal-up" style="--delay: 100ms">
        <v-btn-toggle
          v-model="selected"
          class="kind-filter"
          color="primary"
          mandatory
          density="comfortable"
        >
          <v-btn v-for="kind in filters" :key="kind" :value="kind" size="small">
            {{ filterLabel(kind) }}
          </v-btn>
        </v-btn-toggle>
      </div>

      <v-row class="mt-2" dense>
        <v-col
          v-for="(item, index) in visibleItems"
          :key="`${item.title}-${item.published}`"
          cols="12"
          md="6"
          class="reveal-up"
          :style="`--delay: ${150 + index * 70}ms`"
        >
          <v-card class="article-card h-100" variant="flat">
            <v-card-item>
              <template #prepend>
                <v-avatar color="primary" variant="tonal" size="34">
                  <v-icon icon="mdi-newspaper-variant-outline" />
                </v-avatar>
              </template>
              <v-card-title class="article-title">{{ item.title }}</v-card-title>
              <v-card-subtitle>{{ item.outlet }} · {{ item.published }}</v-card-subtitle>
              <template #append>
                <v-chip size="x-small" color="secondary" variant="tonal">
                  {{ t(`articles.kinds.${item.kind}`) }}
                </v-chip>
              </template>
            </v-card-item>

            <v-card-text>
              <p class="summary">{{ item.summary }}</p>
              <div class="tag-wrap">
                <v-chip
                  v-for="tag in item.tags"
                  :key="tag"
                  size="x-small"
                  variant="outlined"
                  color="primary"
                >
                  {{ tag }}
                </v-chip>
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn
                v-if="item.link"
                :href="item.link"
                target="_blank"
                rel="noreferrer"
                append-icon="mdi-open-in-new"
                variant="text"
              >
                {{ t("articles.open") }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.section-anchor {
  scroll-margin-top: 110px;
}

.section-block {
  padding-block: clamp(2.2rem, 5vw, 3.8rem);
}

.article-shell {
  background:
    radial-gradient(900px 300px at 100% -20%, rgb(217 143 61 / 12%), transparent 70%),
    linear-gradient(180deg, rgb(255 253 247 / 74%), rgb(255 253 247 / 25%));
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

.kind-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.article-card {
  border: 1px solid rgb(15 76 92 / 16%);
  background: rgb(255 253 247 / 85%);
}

.article-title {
  font-size: 1.03rem;
  line-height: 1.35;
}

.summary {
  margin: 0;
  color: rgb(13 52 63 / 88%);
}

.tag-wrap {
  margin-top: 0.8rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}
</style>
