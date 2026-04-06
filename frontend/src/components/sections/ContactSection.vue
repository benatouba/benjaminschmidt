<script setup lang="ts">
import { useI18n } from "vue-i18n";

import type { ContactLink, ProfileInfo } from "@/types/site";

const props = defineProps<{
  profile: ProfileInfo;
  links: ContactLink[];
}>();

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <section id="contact" class="section-block section-anchor">
    <v-container fluid>
      <div class="contact-card reveal-up" style="--delay: 90ms">
        <div class="contact-grid">
          <div class="contact-info">
            <p class="kicker">{{ t("contact.kicker") }}</p>
            <h2 class="contact-title">{{ t("contact.heading") }}</h2>
            <p class="contact-copy">{{ t("contact.copy") }}</p>
            
            <p v-if="props.profile.address" class="address-line">
              <v-icon icon="mdi-home-map-marker" size="18" />
              {{ props.profile.address }}
            </p>
            
            <a
              :href="`mailto:${props.profile.email}`"
              class="email-btn"
            >
              <v-icon icon="mdi-email-outline" size="18" />
              {{ props.profile.email }}
            </a>
          </div>

          <div class="links-list">
            <a
              v-for="link in props.links"
              :key="link.label"
              :href="link.href"
              :target="link.href ? '_blank' : undefined"
              :rel="link.href ? 'noreferrer' : undefined"
              :sublabel="link.sublabel"
              class="link-item"
            >
              <div class="link-icon">
                <v-icon :icon="link.icon" size="20" />
              </div>
              <div class="link-content">
                <span class="link-label">{{ link.label }}</span>
                <span class="link-sublabel">
                  {{ link.href ? t(link.sublabel) : t('contact.comingSoon') }}
                </span>
              </div>
              <v-icon
                :icon="link.href ? 'mdi-arrow-top-right' : 'mdi-clock-outline'"
                size="16"
                class="link-arrow"
              />
            </a>
          </div>
        </div>
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
  padding-bottom: clamp(3rem, 8vw, 6rem);
}

.contact-card {
  padding: clamp(1.5rem, 3vw, 2.5rem);
  background: 
    radial-gradient(ellipse 80% 60% at 0% 0%, rgba(34, 211, 238, 0.08), transparent 50%),
    radial-gradient(ellipse 80% 60% at 100% 100%, rgba(99, 102, 241, 0.06), transparent 50%),
    rgba(30, 41, 59, 0.5);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  backdrop-filter: blur(8px);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: clamp(2rem, 4vw, 3rem);
}

.contact-info {
  display: flex;
  flex-direction: column;
}

.kicker {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary);
}

.contact-title {
  margin: 0.5rem 0 0;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: var(--page-text);
}

.contact-copy {
  margin: 1rem 0 0;
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--page-text-muted);
  max-width: 50ch;
}

.address-line {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1.25rem 0 0;
  font-size: 0.9rem;
  color: var(--page-text-muted);
}

.address-line .v-icon {
  color: var(--primary);
}

.email-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  padding: 0.75rem 1.25rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--page-background);
  background: var(--primary);
  border-radius: 8px;
  text-decoration: none;
  transition: opacity 0.15s ease;
  width: fit-content;
}

.email-btn:hover {
  opacity: 0.9;
}

.links-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(15, 23, 42, 0.4);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  align-self: start;
}

.link-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  text-decoration: none;
  border-radius: 8px;
  transition: background 0.15s ease;
}

.link-item:hover {
  background: rgba(148, 163, 184, 0.08);
}

.link-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: rgba(148, 163, 184, 0.1);
  border-radius: 8px;
  color: var(--page-text-muted);
  flex-shrink: 0;
}

.link-content {
  flex: 1;
  min-width: 0;
}

.link-label {
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--page-text);
}

.link-sublabel {
  display: block;
  font-size: 0.75rem;
  color: var(--page-text-muted);
  margin-top: 0.1rem;
}

.link-arrow {
  color: var(--page-text-muted);
  flex-shrink: 0;
}

@media (width <= 920px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
