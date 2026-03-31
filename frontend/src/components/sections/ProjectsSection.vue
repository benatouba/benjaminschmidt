<script setup lang="ts">
import type { ResearchProject } from "@/types/site";

const props = defineProps<{
  projects: ResearchProject[];
}>();

const projectStatusColor = (status: ResearchProject["status"]) => {
  if (status === "Active") return "success";
  if (status === "Planning") return "warning";
  return "info";
};
</script>

<template>
  <section id="projects" class="section-block section-anchor">
    <v-container class="px-4 px-sm-6 px-md-8" fluid>
      <div class="section-heading reveal-up" style="--delay: 40ms">
        <p class="kicker">Scientific Projects</p>
        <h2>Research software and initiatives</h2>
      </div>

      <v-row class="mt-1" dense>
        <v-col
          v-for="(project, index) in props.projects"
          :key="project.name"
          cols="12"
          md="4"
          class="reveal-up"
          :style="`--delay: ${100 + index * 90}ms`"
        >
          <v-card class="project-card h-100" variant="flat" color="surface">
            <v-card-item>
              <template #append>
                <v-chip :color="projectStatusColor(project.status)" size="x-small" variant="tonal">
                  {{ project.status }}
                </v-chip>
              </template>
              <v-card-title class="project-title">{{ project.name }}</v-card-title>
              <v-card-subtitle>{{ project.timeframe }}</v-card-subtitle>
            </v-card-item>

            <v-card-text>
              <p class="project-summary">{{ project.summary }}</p>

              <p class="meta-label">Stack</p>
              <div class="chip-wrap">
                <v-chip
                  v-for="item in project.stack"
                  :key="item"
                  size="x-small"
                  variant="outlined"
                  color="secondary"
                >
                  {{ item }}
                </v-chip>
              </div>

              <p class="meta-label mt-4">Outcomes</p>
              <v-list class="outcome-list" density="compact" lines="one">
                <v-list-item
                  v-for="outcome in project.outcomes"
                  :key="outcome"
                  prepend-icon="mdi-arrow-right-thin-circle-outline"
                  :title="outcome"
                />
              </v-list>
            </v-card-text>
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

.project-card {
  border: 1px solid rgb(15 76 92 / 16%);
}

.project-title {
  font-size: 1.05rem;
}

.project-summary {
  margin: 0;
  color: rgb(13 52 63 / 88%);
}

.meta-label {
  margin: 0.9rem 0 0;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: rgb(90 125 124);
}

.chip-wrap {
  margin-top: 0.45rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.outcome-list {
  margin-top: 0.4rem;
  background: transparent;
}
</style>
