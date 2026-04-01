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
  <section id="contact" class="section-block section-anchor contact-shell">
    <v-container class="px-4 px-sm-6 px-md-8" fluid>
      <v-card class="contact-card reveal-up" style="--delay: 90ms" variant="flat">
        <v-card-text class="contact-grid">
          <div>
            <p class="kicker">{{ t("contact.kicker") }}</p>
            <h2 class="contact-title">{{ t("contact.heading") }}</h2>
            <p class="contact-copy">{{ t("contact.copy") }}</p>
            <p v-if="props.profile.address" class="address-line">
              <v-icon icon="mdi-home-map-marker" size="small" class="mr-1" />
              {{ props.profile.address }}
            </p>
            <div class="cta-wrap">
              <v-btn
                :href="`mailto:${props.profile.email}`"
                color="primary"
                prepend-icon="mdi-email-outline"
              >
                {{ props.profile.email }}
              </v-btn>
            </div>
          </div>

          <v-list class="link-list" density="comfortable" lines="two">
            <v-list-item
              v-for="link in props.links"
              :key="link.label"
              :href="link.href"
              :target="link.href ? '_blank' : undefined"
              :rel="link.href ? 'noreferrer' : undefined"
              :prepend-icon="link.icon"
              :title="link.label"
              :subtitle="link.href ? t('contact.openProfile') : t('contact.comingSoon')"
              :append-icon="link.href ? 'mdi-open-in-new' : 'mdi-clock-outline'"
            />
          </v-list>
        </v-card-text>
      </v-card>
    </v-container>
  </section>
</template>

<style scoped>
.section-anchor {
  scroll-margin-top: 110px;
}

.section-block {
  padding-block: clamp(2.3rem, 5vw, 4rem);
}

.contact-shell {
  padding-bottom: clamp(2.8rem, 7vw, 5rem);
}

.contact-card {
  border: 1px solid rgb(15 76 92 / 18%);
  background:
    radial-gradient(80% 110% at 10% 0, rgb(217 143 61 / 11%), transparent 70%),
    radial-gradient(90% 110% at 100% 100%, rgb(15 76 92 / 12%), transparent 75%),
    rgb(255 253 247 / 92%);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: clamp(1.2rem, 3vw, 2rem);
  padding: clamp(1rem, 2.2vw, 1.8rem);
}

.kicker {
  margin: 0;
  font-size: 0.82rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgb(90 125 124);
}

.contact-title {
  margin: 0.4rem 0 0;
  font-family: var(--font-display);
  font-size: clamp(1.45rem, 2.7vw, 2rem);
  line-height: 1.2;
  color: rgb(8 34 42);
}

.contact-copy {
  margin: 0.95rem 0 0;
  color: rgb(13 52 63 / 88%);
  max-width: 62ch;
}

.address-line {
  margin: 0.8rem 0 0;
  display: flex;
  align-items: center;
  color: rgb(13 52 63 / 82%);
  font-size: 0.94rem;
}

.cta-wrap {
  margin-top: 1.2rem;
}

.link-list {
  align-self: center;
  border: 1px solid rgb(15 76 92 / 12%);
  border-radius: 16px;
  background: rgb(255 255 255 / 54%);
}

@media (width <= 920px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
