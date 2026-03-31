<script setup lang="ts">
import type { ProfileInfo } from "@/types/site";

const props = defineProps<{
  profile: ProfileInfo;
}>();
</script>

<template>
  <section id="about" class="section-anchor">
    <v-container class="hero-grid px-4 px-sm-6 px-md-8" fluid>
      <div class="intro reveal-up" style="--delay: 80ms">
        <p class="eyebrow">Scientific Career Profile</p>
        <h1 class="hero-title">{{ props.profile.name }}</h1>
        <p class="hero-summary">{{ props.profile.summary }}</p>

        <div class="hero-meta">
          <v-chip
            prepend-icon="mdi-map-marker-outline"
            color="primary"
            variant="tonal"
            size="small"
          >
            {{ props.profile.location }}
          </v-chip>
          <v-chip prepend-icon="mdi-card-account-details-outline" variant="outlined" size="small">
            ORCID {{ props.profile.orcid }}
          </v-chip>
          <v-chip
            v-if="props.profile.phone"
            prepend-icon="mdi-phone-outline"
            variant="outlined"
            size="small"
          >
            {{ props.profile.phone }}
          </v-chip>
        </div>

        <div class="hero-actions">
          <v-btn
            to="/publications"
            prepend-icon="mdi-book-open-page-variant-outline"
            color="primary"
          >
            View Publications
          </v-btn>
          <v-btn to="/cv" prepend-icon="mdi-file-account-outline" color="secondary" variant="tonal">
            Open CV
          </v-btn>
          <v-btn to="/blog" prepend-icon="mdi-post-outline" variant="text">Read Blog</v-btn>
        </div>
      </div>

      <v-card class="profile-card reveal-up" style="--delay: 180ms" color="surface">
        <v-card-item>
          <template #prepend>
            <v-avatar color="primary" size="40">
              <v-icon icon="mdi-account" />
            </v-avatar>
          </template>
          <v-card-title>Research Focus</v-card-title>
          <v-card-subtitle>Current areas of interest</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          <div class="chip-wrap">
            <v-chip
              v-for="interest in props.profile.interests"
              :key="interest"
              color="primary"
              variant="outlined"
              size="small"
            >
              {{ interest }}
            </v-chip>
          </div>

          <v-divider class="my-5" />

          <p class="skill-heading">Core strengths</p>
          <v-list class="skill-list" density="compact" lines="one">
            <v-list-item
              v-for="skill in props.profile.skills"
              :key="skill"
              prepend-icon="mdi-check-circle-outline"
              :title="skill"
            />
          </v-list>
        </v-card-text>
      </v-card>
    </v-container>
  </section>
</template>

<style scoped>
.section-anchor {
  scroll-margin-top: 120px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: clamp(1.25rem, 3vw, 2.5rem);
  padding-top: clamp(2.5rem, 6vw, 4.5rem);
  padding-bottom: clamp(1.8rem, 4vw, 2.6rem);
}

.intro {
  align-self: center;
}

.eyebrow {
  margin: 0;
  font-size: 0.85rem;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: rgb(90 125 124);
}

.hero-title {
  margin: 0.55rem 0 0;
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 5vw, 3.7rem);
  line-height: 1.04;
  color: rgb(8 34 42);
  text-wrap: balance;
}

.hero-summary {
  margin: 1.1rem 0 0;
  max-width: 68ch;
  font-size: clamp(1.02rem, 1.4vw, 1.18rem);
  line-height: 1.58;
  color: rgb(13 52 63 / 88%);
}

.hero-meta {
  margin-top: 1.25rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.hero-actions {
  margin-top: 1.45rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}

.profile-card {
  border: 1px solid rgb(15 76 92 / 14%);
}

.chip-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.skill-heading {
  margin: 0;
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: rgb(90 125 124);
}

.skill-list {
  margin-top: 0.5rem;
  background: transparent;
}

@media (width <= 980px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }
}
</style>
