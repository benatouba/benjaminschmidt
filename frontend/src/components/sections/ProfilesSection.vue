<script setup lang="ts">
import { useI18n } from "vue-i18n";

import type { ExternalProfileLink } from "@/types/site";

const props = defineProps<{
  profiles: ExternalProfileLink[];
}>();

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <section id="profiles" class="section-block section-anchor">
    <v-container fluid>
      <div class="section-heading reveal-up" style="--delay: 40ms">
        <h2>{{ t("profiles.heading") }}</h2>
      </div>

      <div class="profiles-grid">
        <article
          v-for="(profile, index) in props.profiles"
          :key="profile.label"
          class="profile-card reveal-up"
          :style="`--delay: ${120 + index * 70}ms`"
        >
          <div class="card-header">
            <div class="card-icon">
              <v-icon :icon="profile.icon" size="20" />
            </div>
            <div class="card-meta">
              <h3 class="profile-label">{{ profile.label }}</h3>
              <p class="profile-category">{{ t(`profiles.categories.${profile.category}`) }}</p>
            </div>
          </div>

          <p class="profile-description">{{ profile.description }}</p>

          <a
            v-if="profile.href"
            :href="profile.href"
            target="_blank"
            rel="noreferrer"
            class="profile-link"
          >
            {{ t("profiles.visitProfile") }}
            <v-icon icon="mdi-arrow-top-right" size="16" />
          </a>
          <span v-else class="profile-link disabled">
            {{ t("profiles.comingSoon") }}
          </span>
        </article>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.profiles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
}

.profile-card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  transition: border-color 0.2s ease;
}

.profile-card:hover {
  border-color: rgba(34, 211, 238, 0.3);
}

.card-header {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--primary-muted);
  border-radius: 10px;
  color: var(--primary);
  flex-shrink: 0;
}

.card-meta {
  flex: 1;
  min-width: 0;
}

.profile-label {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--page-text);
}

.profile-category {
  margin: 0.15rem 0 0;
  font-size: 0.8rem;
  color: var(--page-text-muted);
}

.profile-description {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--page-text-muted);
}

.profile-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: auto;
  padding-top: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--primary);
  text-decoration: none;
  transition: opacity 0.15s ease;
}

.profile-link:hover {
  opacity: 0.8;
}

.profile-link.disabled {
  color: var(--page-text-muted);
  cursor: default;
}

.profile-link.disabled:hover {
  opacity: 1;
}
</style>
