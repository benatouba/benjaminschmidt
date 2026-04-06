<script setup lang="ts">
import profilePhoto from "@/assets/cv-profile-pro-384.webp";
import profilePhotoSmall from "@/assets/cv-profile-pro-256.webp";
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

const profilePhotoSrcset = `${profilePhotoSmall} 256w, ${profilePhoto} 384w`;
</script>

<template>
  <section id="about" class="section-anchor">
    <v-container class="hero-grid" fluid>
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
            {{ t("hero.orcidLabel") }} {{ props.profile.orcid }}
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
            to="/spotlights"
            prepend-icon="mdi-lightbulb-outline"
            variant="text"
            class="action-btn text-btn"
          >
            {{ t("hero.readBlog") }}
          </v-btn>
        </div>
      </div>

      <div class="profile-card reveal-up" style="--delay: 180ms">
        <div class="profile-top">
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

          <div class="focus-pane">
            <div class="card-header">
              <div class="card-icon">
                <v-icon icon="mdi-account" size="20" />
              </div>
              <div>
                <h2 class="card-title">{{ t("hero.researchFocus") }}</h2>
                <p class="card-subtitle">{{ t("hero.currentInterests") }}</p>
              </div>
            </div>

            <p class="card-focus-copy">{{ t("hero.currentInterestsDetail") }}</p>

            <div v-if="interestBadges.length" class="interests-wrap">
              <a
                v-for="badge in interestBadges"
                :key="badge.key"
                :href="badge.href"
                :target="badge.href ? '_blank' : undefined"
                :rel="badge.href ? 'noreferrer' : undefined"
                class="interest-badge-link"
              >
                <img
                  :src="badge.image"
                  :alt="badge.label"
                  :width="badge.width ?? 80"
                  :height="badge.height ?? 20"
                  loading="lazy"
                  decoding="async"
                  class="interest-badge"
                />
              </a>
            </div>
          </div>
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
            <img
              :src="badge.image"
              :alt="badge.label"
              :width="badge.width ?? 80"
              :height="badge.height ?? 20"
              loading="lazy"
              decoding="async"
              class="skill-badge"
            />
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
  grid-template-columns: 1.25fr 1fr;
  gap: clamp(0.75rem, 1.8vw, 1.4rem);
  max-width: min(1440px, 98vw);
  margin-inline: auto;
  padding-inline: clamp(0.6rem, 1.4vw, 1.2rem);
  padding-top: clamp(2rem, 5.5vw, 3.8rem);
  padding-bottom: clamp(1.5rem, 4vw, 2.8rem);
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
  margin: 1rem 0 0;
  max-width: 60ch;
  font-size: clamp(1rem, 1.3vw, 1.125rem);
  line-height: 1.7;
  color: var(--page-text-muted);
}

.hero-meta {
  margin-top: 1.2rem;
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
  margin-top: 1.4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.profile-links {
  margin-top: 0.8rem;
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
  padding: clamp(1.25rem, 2.5vw, 1.9rem);
  background:
    radial-gradient(ellipse 90% 70% at 20% 0%, rgba(34, 211, 238, 0.08), transparent 55%),
    rgba(30, 41, 59, 0.6);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  backdrop-filter: blur(8px);
}

.profile-top {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.photo-wrap {
  display: flex;
  justify-content: center;
  margin: 0;
}

.profile-photo {
  width: clamp(230px, 34vw, 310px);
  height: clamp(230px, 34vw, 310px);
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid rgba(34, 211, 238, 0.35);
  box-shadow: 0 16px 34px rgba(15, 23, 42, 0.4);
  background: rgba(15, 23, 42, 0.45);
}

.focus-pane {
  width: 100%;
  padding: 0.95rem 1rem;
  background: rgba(15, 23, 42, 0.38);
  border: 1px solid var(--border-color);
  border-radius: 12px;
}

.card-header {
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  margin-bottom: 0.7rem;
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
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--page-text);
}

.card-subtitle {
  margin: 0.2rem 0 0;
  font-size: 0.77rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--page-text-muted);
}

.card-focus-copy {
  margin: 0;
  max-width: none;
  font-size: 0.86rem;
  line-height: 1.6;
  text-wrap: pretty;
  color: var(--page-text-muted);
}

.interests-wrap {
  margin-top: 0.9rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.interest-badge-link {
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  padding-block: 2px;
  border-radius: 4px;
  transition: transform 0.15s ease, opacity 0.15s ease;
}

.interest-badge-link:hover {
  transform: translateY(-1px);
  opacity: 0.9;
}

.interest-badge {
  display: block;
  width: auto;
  height: 20px;
}

.divider {
  margin: 1.1rem 0;
  height: 1px;
  background: var(--border-color);
}

.skill-heading {
  margin: 0 0 0.65rem;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--page-text-muted);
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-badge-link {
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  padding-block: 2px;
  border-radius: 4px;
  transition: transform 0.15s ease, opacity 0.15s ease;
}

.skill-badge-link:hover {
  transform: translateY(-1px);
  opacity: 0.9;
}

.skill-badge {
  display: block;
  width: auto;
  height: 20px;
}

@media (width <= 980px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }

  .profile-photo {
    width: clamp(210px, 58vw, 280px);
    height: clamp(210px, 58vw, 280px);
  }

}

@media (width <= 640px) {
  .profile-card {
    padding: 1rem;
  }

  .focus-pane {
    padding: 0.8rem 0.85rem;
  }
}
</style>
