<script setup lang="ts">
import { useI18n } from "vue-i18n";

import type { ContactLink, ProfileInfo } from "@/types/site";

const props = withDefaults(defineProps<{
  profile: ProfileInfo;
  links: ContactLink[];
  showHeading?: boolean;
}>(), {
  showHeading: true,
});

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <section id="contact" class="section-block section-anchor">
    <v-container fluid>
      <div class="contact-shell reveal-up" style="--delay: 80ms">
        <div class="contact-main">
          <template v-if="props.showHeading">
            <p class="kicker">{{ t("contact.kicker") }}</p>
            <h2 class="contact-title">{{ t("contact.heading") }}</h2>
            <p class="contact-copy">{{ t("contact.copy") }}</p>
          </template>
          <template v-else>
            <p class="contact-copy inline-copy">{{ t("contact.copy") }}</p>
          </template>

          <div class="contact-actions">
            <a :href="`mailto:${profile.email}`" class="primary-cta">
              <v-icon icon="mdi-email-outline" size="18" />
              {{ t("contact.primaryCta") }}
            </a>
            <RouterLink to="/cv" class="secondary-cta">
              <v-icon icon="mdi-file-account-outline" size="18" />
              {{ t("contact.secondaryCta") }}
            </RouterLink>
          </div>
        </div>

        <div class="links-panel">
          <a
            v-for="link in links"
            :key="link.label"
            :href="link.href"
            :target="link.href ? '_blank' : undefined"
            :rel="link.href ? 'noreferrer' : undefined"
            class="link-item"
          >
            <div class="link-icon">
              <v-icon :icon="link.icon" size="20" />
            </div>
            <div class="link-content">
              <span class="link-label">{{ link.label }}</span>
              <span class="link-sublabel">{{ link.href ? link.sublabel : t("contact.comingSoon") }}</span>
            </div>
            <v-icon :icon="link.href ? 'mdi-arrow-top-right' : 'mdi-clock-outline'" size="16" class="link-arrow" />
          </a>
        </div>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.contact-shell {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
  gap: 1rem;
  padding: clamp(1.2rem, 2.5vw, 1.8rem);
  background:
    radial-gradient(ellipse 90% 65% at 0% 0%, rgba(34, 211, 238, 0.08), transparent 48%),
    rgba(30, 41, 59, 0.54);
  border: 1px solid var(--border-color);
  border-radius: 18px;
}

.kicker {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary);
}

.contact-title {
  margin: 0.45rem 0 0;
  font-size: clamp(1.8rem, 3.2vw, 2.5rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--page-text);
}

.contact-copy {
  margin: 0.8rem 0 0;
  max-width: 58ch;
  font-size: 0.96rem;
  line-height: 1.7;
  color: var(--page-text-muted);
}

.inline-copy {
  margin-top: 0;
}

.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.25rem;
}

.primary-cta,
.secondary-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.1rem;
  border-radius: 10px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
}

.primary-cta {
  color: #0f172a;
  background: var(--primary);
}

.secondary-cta {
  color: var(--page-text);
  border: 1px solid var(--border-color);
  background: rgba(148, 163, 184, 0.08);
}

.links-panel {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.85rem;
  border: 1px solid var(--border-color);
  border-radius: 14px;
  background: rgba(15, 23, 42, 0.34);
}

.link-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 10px;
  text-decoration: none;
}

.link-item:hover {
  background: rgba(148, 163, 184, 0.08);
}

.link-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(148, 163, 184, 0.1);
  color: var(--page-text-muted);
}

.link-content {
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
}

.link-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--page-text);
}

.link-sublabel,
.link-arrow {
  font-size: 0.78rem;
  color: var(--page-text-muted);
}

@media (width <= 920px) {
  .contact-shell {
    grid-template-columns: 1fr;
  }
}
</style>
