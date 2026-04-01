<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

import type { PublicationItem } from "@/types/site";

const props = defineProps<{
  publications: PublicationItem[];
}>();

const { t } = useI18n({ useScope: "global" });

const kindFilter = ref<"All" | PublicationItem["kind"]>("All");
const publicationKinds: Array<"All" | PublicationItem["kind"]> = [
  "All",
  "Journal",
  "Conference",
  "Preprint",
  "Book Chapter",
];

const filteredPublications = computed(() =>
  props.publications.filter(
    (entry) => kindFilter.value === "All" || entry.kind === kindFilter.value,
  ),
);

const kindLabel = (kind: string) => {
  if (kind === "All") return t("publications.filterAll");
  return t(`publications.kinds.${kind}`);
};
</script>

<template>
  <section id="publications" class="section-block section-anchor publications-shell">
    <v-container class="px-4 px-sm-6 px-md-8" fluid>
      <div class="section-heading reveal-up" style="--delay: 40ms">
        <p class="kicker">{{ t("publications.kicker") }}</p>
        <h2>{{ t("publications.heading") }}</h2>
      </div>

      <div class="reveal-up" style="--delay: 100ms">
        <v-btn-toggle
          v-model="kindFilter"
          class="kind-filter"
          color="primary"
          mandatory
          density="comfortable"
          variant="text"
        >
          <v-btn v-for="kind in publicationKinds" :key="kind" :value="kind" size="small">
            {{ kindLabel(kind) }}
          </v-btn>
        </v-btn-toggle>
      </div>

      <v-row class="mt-1" dense>
        <v-col
          v-for="(publication, index) in filteredPublications"
          :key="`${publication.title}-${publication.year}`"
          cols="12"
          md="6"
          class="reveal-up"
          :style="`--delay: ${160 + index * 70}ms`"
        >
          <v-card class="publication-card h-100" variant="flat">
            <v-card-item>
              <template #prepend>
                <v-avatar color="primary" variant="tonal" size="34">
                  <v-icon icon="mdi-file-document-outline" />
                </v-avatar>
              </template>

              <v-card-title class="publication-title">{{ publication.title }}</v-card-title>
              <v-card-subtitle>{{ publication.venue }} - {{ publication.year }}</v-card-subtitle>
            </v-card-item>

            <v-card-text>
              <div class="meta-row">
                <v-chip size="x-small" color="secondary" variant="tonal">{{
                  t(`publications.kinds.${publication.kind}`)
                }}</v-chip>
                <v-chip v-if="publication.doi" size="x-small" variant="outlined"
                  >DOI {{ publication.doi }}</v-chip
                >
              </div>

              <p class="summary">{{ publication.summary }}</p>

              <div class="tag-wrap">
                <v-chip
                  v-for="tag in publication.tags"
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
                v-if="publication.link"
                :href="publication.link"
                target="_blank"
                rel="noreferrer"
                append-icon="mdi-open-in-new"
                variant="text"
              >
                {{ t("publications.read") }}
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
  padding-block: clamp(2.2rem, 5vw, 3.7rem);
}

.publications-shell {
  background:
    radial-gradient(1200px 240px at 0 -20%, rgb(15 76 92 / 10%), transparent 65%),
    linear-gradient(180deg, rgb(255 253 247 / 66%), rgb(255 253 247 / 20%));
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
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.publication-card {
  border: 1px solid rgb(15 76 92 / 16%);
  background: rgb(255 253 247 / 84%);
}

.publication-title {
  font-size: 1.06rem;
  line-height: 1.35;
}

.meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.summary {
  margin: 0.85rem 0 0;
  color: rgb(13 52 63 / 88%);
}

.tag-wrap {
  margin-top: 0.85rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
</style>
