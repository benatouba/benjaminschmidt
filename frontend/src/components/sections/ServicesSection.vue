<script setup lang="ts">
import type { ResearchService } from "@/types/site";

const props = defineProps<{
  services: ResearchService[];
}>();
</script>

<template>
  <section id="services" class="section-block section-anchor">
    <v-container class="px-4 px-sm-6 px-md-8" fluid>
      <div class="section-heading reveal-up" style="--delay: 40ms">
        <p class="kicker">Services</p>
        <h2>Standard professional offerings for a research website</h2>
      </div>

      <v-row class="mt-1" dense>
        <v-col
          v-for="(service, index) in props.services"
          :key="service.title"
          cols="12"
          md="4"
          class="reveal-up"
          :style="`--delay: ${120 + index * 80}ms`"
        >
          <v-card class="service-card h-100" variant="flat">
            <v-card-item>
              <template #prepend>
                <v-avatar color="primary" variant="tonal" size="36">
                  <v-icon :icon="service.icon" />
                </v-avatar>
              </template>
              <v-card-title>{{ service.title }}</v-card-title>
              <v-card-subtitle>{{ service.audience }}</v-card-subtitle>
            </v-card-item>
            <v-card-text>
              <p class="summary">{{ service.description }}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                :href="service.ctaHref"
                prepend-icon="mdi-send-outline"
                color="primary"
                variant="tonal"
              >
                {{ service.ctaLabel }}
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

.service-card {
  border: 1px solid rgb(15 76 92 / 16%);
}

.summary {
  margin: 0;
  color: rgb(13 52 63 / 88%);
}
</style>
