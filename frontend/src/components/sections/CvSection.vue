<script setup lang="ts">
import type { CvAppointment, EducationEntry, HonorEntry } from "@/types/site";

const props = defineProps<{
  appointments: CvAppointment[];
  education: EducationEntry[];
  honors: HonorEntry[];
}>();
</script>

<template>
  <section id="cv" class="section-block section-anchor">
    <v-container class="px-4 px-sm-6 px-md-8" fluid>
      <div class="section-heading reveal-up" style="--delay: 40ms">
        <p class="kicker">Curriculum Vitae</p>
        <h2>Appointments, education, and honors</h2>
      </div>

      <v-row dense>
        <v-col cols="12" md="7" class="reveal-up" style="--delay: 100ms">
          <v-card class="h-100 cv-card" variant="flat">
            <v-card-title>Professional Appointments</v-card-title>
            <v-card-text class="cards-stack">
              <v-card
                v-for="item in props.appointments"
                :key="`${item.period}-${item.role}`"
                class="appointment-card"
                variant="tonal"
                color="surface"
              >
                <v-card-item>
                  <template #prepend>
                    <v-avatar color="primary" variant="tonal" size="34">
                      <v-icon icon="mdi-briefcase-outline" />
                    </v-avatar>
                  </template>
                  <v-card-title class="appointment-title">{{ item.role }}</v-card-title>
                  <v-card-subtitle>{{ item.institution }} · {{ item.location }}</v-card-subtitle>
                  <template #append>
                    <v-chip size="x-small" variant="outlined" color="primary">{{
                      item.period
                    }}</v-chip>
                  </template>
                </v-card-item>

                <v-card-text>
                  <p class="summary">{{ item.summary }}</p>
                  <div class="chip-wrap">
                    <v-chip
                      v-for="highlight in item.highlights"
                      :key="highlight"
                      size="x-small"
                      color="secondary"
                      variant="outlined"
                    >
                      {{ highlight }}
                    </v-chip>
                  </div>
                </v-card-text>
              </v-card>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="5" class="reveal-up" style="--delay: 160ms">
          <v-card class="mb-3 cv-card" variant="flat">
            <v-card-title>Education</v-card-title>
            <v-list density="comfortable" lines="three" class="transparent-list">
              <v-list-item
                v-for="entry in props.education"
                :key="`${entry.period}-${entry.degree}`"
                prepend-icon="mdi-school-outline"
                :title="entry.degree"
                :subtitle="`${entry.institution} · ${entry.period}`"
              >
                <template #append>
                  <span class="list-detail">{{ entry.details }}</span>
                </template>
              </v-list-item>
            </v-list>
          </v-card>

          <v-card class="cv-card" variant="flat">
            <v-card-title>Awards and Honors</v-card-title>
            <v-list density="comfortable" lines="two" class="transparent-list">
              <v-list-item
                v-for="honor in props.honors"
                :key="`${honor.year}-${honor.title}`"
                prepend-icon="mdi-medal-outline"
                :title="honor.title"
                :subtitle="`${honor.issuer} · ${honor.year}`"
              >
                <template #append>
                  <span class="list-detail">{{ honor.description }}</span>
                </template>
              </v-list-item>
            </v-list>
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

.cv-card {
  border: 1px solid rgb(15 76 92 / 16%);
}

.cards-stack {
  display: grid;
  gap: 0.8rem;
}

.appointment-card {
  border: 1px solid rgb(15 76 92 / 14%);
}

.appointment-title {
  font-size: 1rem;
}

.summary {
  margin: 0;
  color: rgb(13 52 63 / 88%);
}

.chip-wrap {
  margin-top: 0.7rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.transparent-list {
  background: transparent;
}

.list-detail {
  max-width: 16rem;
  font-size: 0.78rem;
  color: rgb(13 52 63 / 72%);
  text-align: right;
}

@media (width <= 960px) {
  .list-detail {
    display: none;
  }
}
</style>
