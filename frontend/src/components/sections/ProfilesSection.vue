<script setup lang="ts">
import { useI18n } from "vue-i18n";

import type { ExternalProfileLink } from "@/types/site";

const props = defineProps<{
  profiles: ExternalProfileLink[];
}>();

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <section id="profiles" class="section-block section-anchor profiles-shell">
    <v-container class="px-4 px-sm-6 px-md-8" fluid>
      <div class="section-heading reveal-up" style="--delay: 40ms">
        <p class="kicker">{{ t("profiles.kicker") }}</p>
        <h2>{{ t("profiles.heading") }}</h2>
      </div>

      <v-row class="mt-1" dense>
        <v-col
          v-for="(profile, index) in props.profiles"
          :key="profile.label"
          cols="12"
          md="6"
          class="reveal-up"
          :style="`--delay: ${120 + index * 70}ms`"
        >
          <v-card class="profile-card h-100" variant="flat">
            <v-card-item>
              <template #prepend>
                <v-avatar color="primary" variant="tonal" size="34">
                  <v-icon :icon="profile.icon" />
                </v-avatar>
              </template>
              <v-card-title>{{ profile.label }}</v-card-title>
              <v-card-subtitle>{{ t(`profiles.categories.${profile.category}`) }}</v-card-subtitle>
            </v-card-item>
            <v-card-text>
              <p class="summary">{{ profile.description }}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                :href="profile.href"
                :disabled="!profile.href"
                :target="profile.href ? '_blank' : undefined"
                :rel="profile.href ? 'noreferrer' : undefined"
                append-icon="mdi-open-in-new"
                variant="text"
              >
                {{ profile.href ? t("profiles.visitProfile") : t("profiles.comingSoon") }}
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

.profiles-shell {
  background:
    radial-gradient(1200px 220px at -5% -15%, rgb(15 76 92 / 10%), transparent 72%),
    linear-gradient(180deg, rgb(255 253 247 / 72%), rgb(255 253 247 / 22%));
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

.profile-card {
  border: 1px solid rgb(15 76 92 / 16%);
  background: rgb(255 253 247 / 85%);
}

.summary {
  margin: 0;
  color: rgb(13 52 63 / 88%);
}
</style>
