<script setup lang="ts">
import { resolveTechBadge } from "@/data/techBadges";
import { useI18n } from "vue-i18n";

import profilePhoto from "@/assets/cv-profile-pro-384.webp";
import profilePhotoSmall from "@/assets/cv-profile-pro-256.webp";

import type { ImpactHighlight, ProfileInfo } from "@/types/site";

const props = defineProps<{
  profile: ProfileInfo;
  highlights: ImpactHighlight[];
}>();

const { t } = useI18n({ useScope: "global" });

const quickLinks = [
  {
    label: "GitHub",
    href: "https://github.com/benatouba",
    icon: "mdi-github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dr-benjamin-schmidt/",
    icon: "mdi-linkedin",
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0000-0002-9669-3360",
    icon: "mdi-account-badge-outline",
  },
];

const featuredHighlights = props.highlights.slice(0, 3);
const profilePhotoSrcset = `${profilePhotoSmall} 256w, ${profilePhoto} 384w`;
const coreStackBadges = props.profile.skills.map((skill) => ({
  key: skill,
  ...resolveTechBadge(skill),
}));
</script>

<template>
  <section id="about" class="section-anchor hero-section">
    <v-container class="hero-grid" fluid>
      <div class="hero-copy reveal-up" style="--delay: 60ms">
        <p class="eyebrow">{{ t("hero.eyebrow") }}</p>
        <h1 class="hero-title">{{ props.profile.name }}</h1>
        <p class="hero-headline">{{ props.profile.headline }}</p>
        <p class="hero-summary">{{ props.profile.summary }}</p>

        <div class="hero-meta">
          <span class="meta-chip">
            <v-icon icon="mdi-map-marker-outline" size="15" />
            {{ props.profile.location }}
          </span>
          <span class="meta-chip emphasis">
            <v-icon icon="mdi-briefcase-check-outline" size="15" />
            {{ t("hero.availability") }}
          </span>
        </div>

        <div class="hero-actions">
          <v-btn to="/projects" color="primary" class="action-btn primary-btn">
            {{ t("hero.viewProjects") }}
          </v-btn>
          <v-btn to="/cv" variant="outlined" class="action-btn">
            {{ t("hero.openCv") }}
          </v-btn>
          <v-btn
            :href="`mailto:${props.profile.email}`"
            variant="text"
            class="action-btn text-btn"
          >
            {{ t("hero.contactMe") }}
          </v-btn>
        </div>

        <div class="profile-links">
          <a
            v-for="link in quickLinks"
            :key="link.label"
            :href="link.href"
            class="profile-link-chip"
            target="_blank"
            rel="noreferrer"
          >
            <v-icon :icon="link.icon" size="15" />
            {{ link.label }}
          </a>
        </div>
      </div>

      <div class="hero-proof reveal-up" style="--delay: 140ms">
        <div class="proof-header">
          <div class="photo-wrap">
            <img
              :src="profilePhoto"
              :srcset="profilePhotoSrcset"
              sizes="(max-width: 980px) 180px, 240px"
              :alt="props.profile.name"
              width="384"
              height="384"
              fetchpriority="high"
              decoding="async"
              class="profile-photo"
            />
          </div>

          <div class="focus-card">
            <p class="focus-kicker">{{ t("hero.researchFocus") }}</p>
            <h2 class="focus-title">{{ t("hero.currentInterests") }}</h2>
            <p class="focus-copy">{{ t("hero.currentInterestsDetail") }}</p>
          </div>
        </div>

        <div class="highlights-grid">
          <article
            v-for="item in featuredHighlights"
            :key="`${item.value}-${item.label}`"
            class="highlight-card"
          >
            <v-icon :icon="item.icon" size="18" class="highlight-icon" />
            <p class="highlight-value">{{ item.value }}</p>
            <p class="highlight-label">{{ item.label }}</p>
          </article>
        </div>

        <div class="strengths-card">
          <p class="strengths-heading">{{ t("hero.coreStrengths") }}</p>
          <div class="strengths-grid">
            <a
              v-for="badge in coreStackBadges"
              :key="badge.key"
              :href="badge.href"
              :target="badge.href ? '_blank' : undefined"
              :rel="badge.href ? 'noreferrer' : undefined"
              class="strength-badge-link"
            >
              <img
                :src="badge.image"
                :alt="badge.label"
                :width="badge.width ?? 80"
                :height="badge.height ?? 20"
                loading="lazy"
                decoding="async"
                class="strength-badge"
              />
            </a>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.hero-section {
  padding-block: clamp(2rem, 5vw, 4rem) clamp(1.6rem, 4vw, 3rem);
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.95fr);
  gap: clamp(1rem, 2vw, 1.5rem);
  max-width: min(1440px, 98vw);
  margin-inline: auto;
  padding-inline: clamp(0.6rem, 1.4vw, 1.2rem);
}

.hero-copy {
  align-self: center;
  min-width: 0;
}

.eyebrow {
  margin: 0;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--primary);
}

.hero-title {
  margin: 0.8rem 0 0;
  font-size: clamp(2.8rem, 6vw, 4.4rem);
  line-height: 0.98;
  letter-spacing: -0.03em;
  color: var(--page-text);
  text-wrap: balance;
}

.hero-headline {
  margin: 0.8rem 0 0;
  font-size: clamp(1.1rem, 2vw, 1.45rem);
  font-weight: 600;
  line-height: 1.35;
  color: #f5e0dc;
}

.hero-summary {
  margin: 1rem 0 0;
  max-width: 58ch;
  font-size: clamp(1rem, 1.25vw, 1.1rem);
  line-height: 1.75;
  color: var(--page-text-muted);
}

.hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 1.25rem;
}

.meta-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.45rem 0.7rem;
  font-size: 0.82rem;
  color: var(--page-text-muted);
  background: rgba(166, 173, 200, 0.12);
  border: 1px solid var(--border-color);
  border-radius: 999px;
}

.meta-chip.emphasis {
  color: var(--page-text);
  border-color: rgba(250, 179, 135, 0.42);
  background: rgba(250, 179, 135, 0.12);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.4rem;
}

.action-btn {
  text-transform: none;
  font-weight: 600;
  letter-spacing: 0;
}

.primary-btn {
  color: #1e1e2e !important;
}

.text-btn {
  color: var(--page-text-muted) !important;
}

.profile-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 1rem;
}

.profile-link-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.65rem;
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--page-text-muted);
  text-decoration: none;
  background: rgba(166, 173, 200, 0.12);
  border: 1px solid var(--border-color);
  border-radius: 999px;
  transition:
    color 0.15s ease,
    border-color 0.15s ease,
    background 0.15s ease;
}

.profile-link-chip:hover {
  color: var(--page-text);
  border-color: rgba(250, 179, 135, 0.52);
  background: rgba(250, 179, 135, 0.12);
}

.hero-proof {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: clamp(1rem, 2vw, 1.4rem);
  border: 1px solid var(--border-color);
  border-radius: 18px;
  background: rgba(49, 50, 68, 0.64);
  backdrop-filter: blur(10px);
}

.proof-header {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 1rem;
  align-items: center;
}

.photo-wrap {
  display: flex;
  justify-content: center;
}

.profile-photo {
  width: clamp(144px, 18vw, 198px);
  height: clamp(144px, 18vw, 198px);
  object-fit: cover;
  border-radius: 22px;
  border: 1px solid rgba(250, 179, 135, 0.45);
  box-shadow: 0 18px 34px rgba(17, 17, 27, 0.48);
}

.focus-card,
.strengths-card {
  padding: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 14px;
  background: rgba(30, 30, 46, 0.5);
}

.focus-kicker,
.strengths-heading {
  margin: 0;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--primary);
}

.focus-title {
  margin: 0.45rem 0 0;
  font-size: 1.15rem;
  font-weight: 650;
  color: var(--page-text);
}

.focus-copy {
  margin: 0.65rem 0 0;
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--page-text-muted);
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
}

.highlight-card {
  padding: 0.9rem;
  border: 1px solid var(--border-color);
  border-radius: 14px;
  background: rgba(30, 30, 46, 0.42);
}

.highlight-icon {
  color: var(--primary);
}

.highlight-value {
  margin: 0.55rem 0 0;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--page-text);
}

.highlight-label {
  margin: 0.22rem 0 0;
  font-size: 0.82rem;
  line-height: 1.45;
  color: var(--page-text-muted);
}

.strengths-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 0.8rem;
}

.strength-badge-link {
  display: inline-flex;
  align-items: center;
}

.strength-badge {
  display: block;
  width: auto;
  height: 20px;
}

@media (width <= 1080px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }

  .proof-header {
    grid-template-columns: 1fr;
  }

  .photo-wrap {
    justify-content: flex-start;
  }
}

@media (width <= 720px) {
  .highlights-grid {
    grid-template-columns: 1fr;
  }

  .profile-photo {
    width: 132px;
    height: 132px;
  }
}
</style>
