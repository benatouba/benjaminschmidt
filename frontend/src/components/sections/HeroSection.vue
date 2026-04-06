<script setup lang="ts">
import profilePhoto from "@/assets/cv-profile-pro.webp";
import { resolveKnownTechBadge } from "@/data/techBadges";

import { useI18n } from "vue-i18n";

import type { ProfileInfo } from "@/types/site";

const props = defineProps<{
  profile: ProfileInfo;
}>();

const { t } = useI18n({ useScope: "global" });

const quickLinks = [
  {
    label: "Email",
    href: `mailto:${props.profile.email}`,
    icon: "mdi-email-outline",
  },
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

const interestBadges = props.profile.interests
  .map((interest) => {
    const badge = resolveKnownTechBadge(interest);
    if (!badge) return null;

    return {
      key: `interest-${interest}`,
      ...badge,
    };
  })
  .filter((badge): badge is NonNullable<typeof badge> => badge !== null);

const skillBadges = props.profile.skills
  .map((skill) => {
    const badge = resolveKnownTechBadge(skill);
    if (!badge) return null;

    return {
      key: `skill-${skill}`,
      ...badge,
    };
  })
  .filter((badge): badge is NonNullable<typeof badge> => badge !== null);
</script>

<template>
  <section id="about" class="section-anchor">
    <v-container class="hero-grid px-4 px-sm-6 px-md-8" fluid>
      <div class="intro reveal-up" style="--delay: 80ms">
        <p class="eyebrow">{{ t("hero.eyebrow") }}</p>
        <h1 class="hero-title">{{ props.profile.name }}</h1>
        <p class="hero-summary">{{ props.profile.summary }}</p>

        <div class="hero-meta">
          <span class="meta-item">
            <v-icon icon="mdi-map-marker-outline" size="small" />
            {{ props.profile.location }}
          </span>
          <span class="meta-item">
            <v-icon icon="mdi-card-account-details-outline" size="small" />
            ORCID {{ props.profile.orcid }}
          </span>
          <span v-if="props.profile.phone" class="meta-item">
            <v-icon icon="mdi-phone-outline" size="small" />
            {{ props.profile.phone }}
          </span>
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

        <div class="hero-actions">
          <v-btn
            to="/publications"
            prepend-icon="mdi-book-open-page-variant-outline"
            color="primary"
            class="action-btn primary-btn"
          >
            {{ t("hero.viewPublications") }}
          </v-btn>
          <v-btn
            to="/cv"
            prepend-icon="mdi-file-account-outline"
            variant="outlined"
            class="action-btn"
          >
            {{ t("hero.openCv") }}
          </v-btn>
          <v-btn
            to="/blog"
            prepend-icon="mdi-post-outline"
            variant="text"
            class="action-btn text-btn"
          >
            {{ t("hero.readBlog") }}
          </v-btn>
        </div>
      </div>

      <div class="profile-card reveal-up" style="--delay: 180ms">
        <div class="photo-wrap">
          <img
            :src="profilePhoto"
            alt="Dr. Benjamin Schmidt"
            width="512"
            height="512"
            decoding="async"
            class="profile-photo"
          />
        </div>

        <div class="card-header">
          <div class="card-icon">
            <v-icon icon="mdi-account" size="20" />
          </div>
          <div>
            <h3 class="card-title">{{ t("hero.researchFocus") }}</h3>
            <p class="card-subtitle">{{ t("hero.currentInterests") }}</p>
          </div>
        </div>

        <div v-if="interestBadges.length" class="interests-wrap">
          <a
            v-for="badge in interestBadges"
            :key="badge.key"
            :href="badge.href"
            :target="badge.href ? '_blank' : undefined"
            :rel="badge.href ? 'noreferrer' : undefined"
            class="interest-badge-link"
          >
            <img :src="badge.image" :alt="badge.label" loading="lazy" class="interest-badge" />
          </a>
        </div>

        <div class="divider"></div>

        <p class="skill-heading">{{ t("hero.coreStrengths") }}</p>
        <div v-if="skillBadges.length" class="skills-grid">
          <a
            v-for="badge in skillBadges"
            :key="badge.key"
            :href="badge.href"
            :target="badge.href ? '_blank' : undefined"
            :rel="badge.href ? 'noreferrer' : undefined"
            class="skill-badge-link"
          >
            <img :src="badge.image" :alt="badge.label" loading="lazy" class="skill-badge" />
          </a>
        </div>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.section-anchor {
  scroll-margin-top: 120px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: clamp(2rem, 4vw, 3.5rem);
  padding-top: clamp(3rem, 8vw, 6rem);
  padding-bottom: clamp(2rem, 5vw, 3.5rem);
}

.intro {
  align-self: center;
}

.eyebrow {
  margin: 0;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--primary);
}

.hero-title {
  margin: 0.75rem 0 0;
  font-size: clamp(2.5rem, 5.5vw, 4rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.025em;
  color: var(--page-text);
  text-wrap: balance;
}

.hero-summary {
  margin: 1.25rem 0 0;
  max-width: 60ch;
  font-size: clamp(1rem, 1.3vw, 1.125rem);
  line-height: 1.7;
  color: var(--page-text-muted);
}

.hero-meta {
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.875rem;
  color: var(--page-text-muted);
}

.meta-item .v-icon {
  color: var(--primary);
}

.hero-actions {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.profile-links {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.profile-link-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.65rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--page-text-muted);
  text-decoration: none;
  background: rgba(148, 163, 184, 0.1);
  border: 1px solid var(--border-color);
  border-radius: 999px;
  transition: color 0.15s ease, border-color 0.15s ease, background 0.15s ease;
}

.profile-link-chip:hover {
  color: var(--page-text);
  border-color: rgba(34, 211, 238, 0.3);
  background: rgba(34, 211, 238, 0.08);
}

.profile-link-chip .v-icon {
  color: var(--primary);
}

.action-btn {
  text-transform: none;
  font-weight: 500;
  letter-spacing: 0;
}

.primary-btn {
  background: var(--primary) !important;
  color: #0f172a !important;
}

.text-btn {
  color: var(--page-text-muted) !important;
}

.profile-card {
  padding: 1.75rem;
  background: rgba(30, 41, 59, 0.6);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  backdrop-filter: blur(8px);
}

.photo-wrap {
  margin-bottom: 1.25rem;
  display: flex;
  justify-content: center;
}

.profile-photo {
  width: clamp(140px, 34vw, 190px);
  height: clamp(140px, 34vw, 190px);
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid rgba(34, 211, 238, 0.35);
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.35);
  background: rgba(15, 23, 42, 0.45);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  margin-bottom: 1.25rem;
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
}

.card-title {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--page-text);
}

.card-subtitle {
  margin: 0.15rem 0 0;
  font-size: 0.8rem;
  color: var(--page-text-muted);
}

.interests-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.interest-badge-link {
  display: inline-flex;
  border-radius: 4px;
  transition: transform 0.15s ease, opacity 0.15s ease;
}

.interest-badge-link:hover {
  transform: translateY(-1px);
  opacity: 0.9;
}

.interest-badge {
  display: block;
  height: 20px;
}

.divider {
  margin: 1.5rem 0;
  height: 1px;
  background: var(--border-color);
}

.skill-heading {
  margin: 0 0 0.875rem;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--page-text-muted);
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.skill-badge-link {
  display: inline-flex;
  border-radius: 4px;
  transition: transform 0.15s ease, opacity 0.15s ease;
}

.skill-badge-link:hover {
  transform: translateY(-1px);
  opacity: 0.9;
}

.skill-badge {
  display: block;
  height: 20px;
}

@media (width <= 980px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }
}
</style>
