<script setup lang="ts">
import { resolveKnownTechBadge } from "@/data/techBadges";
import { useI18n } from "vue-i18n";

import type { CvAppointment, EducationEntry, HonorEntry } from "@/types/site";

const props = defineProps<{
  appointments: CvAppointment[];
  education: EducationEntry[];
  honors: HonorEntry[];
}>();

const { t } = useI18n({ useScope: "global" });

const appointmentHighlightBadges = (item: CvAppointment) =>
  item.highlights
    .map((highlight) => {
      const badge = resolveKnownTechBadge(highlight);
      if (!badge) return null;

      return {
        key: `${item.role}-${highlight}`,
        ...badge,
      };
    })
    .filter((badge): badge is NonNullable<typeof badge> => badge !== null);
</script>

<template>
  <section id="cv" class="section-block section-anchor">
    <v-container class="px-4 px-sm-6 px-md-8" fluid>
      <div class="section-heading reveal-up" style="--delay: 40ms">
        <p class="kicker">{{ t("cv.kicker") }}</p>
        <h2>{{ t("cv.heading") }}</h2>
      </div>

      <div class="cv-grid">
        <div class="cv-column reveal-up" style="--delay: 100ms">
          <div class="cv-card">
            <h3 class="card-title">{{ t("cv.professionalAppointments") }}</h3>
            <div class="appointments-stack">
              <article
                v-for="item in props.appointments"
                :key="`${item.period}-${item.role}`"
                class="appointment-item"
              >
                <div class="appointment-header">
                  <div class="appointment-icon">
                    <v-icon icon="mdi-briefcase-outline" size="18" />
                  </div>
                  <div class="appointment-meta">
                    <h4 class="appointment-role">{{ item.role }}</h4>
                    <p class="appointment-info">{{ item.institution }} · {{ item.location }}</p>
                  </div>
                  <span class="appointment-period">{{ item.period }}</span>
                </div>
                <p class="appointment-summary">{{ item.summary }}</p>
                <div v-if="appointmentHighlightBadges(item).length" class="highlights-wrap">
                  <a
                    v-for="badge in appointmentHighlightBadges(item)"
                    :key="badge.key"
                    :href="badge.href"
                    :target="badge.href ? '_blank' : undefined"
                    :rel="badge.href ? 'noreferrer' : undefined"
                    class="highlight-badge-link"
                  >
                    <img
                      :src="badge.image"
                      :alt="badge.label"
                      loading="lazy"
                      class="highlight-badge"
                    />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div class="cv-column reveal-up" style="--delay: 160ms">
          <div class="cv-card">
            <h3 class="card-title">{{ t("cv.education") }}</h3>
            <div class="list-stack">
              <div
                v-for="entry in props.education"
                :key="`${entry.period}-${entry.degree}`"
                class="list-item"
              >
                <div class="list-icon">
                  <v-icon icon="mdi-school-outline" size="18" />
                </div>
                <div class="list-content">
                  <h4 class="list-title">{{ entry.degree }}</h4>
                  <p class="list-subtitle">{{ entry.institution }} · {{ entry.period }}</p>
                  <p class="list-detail">{{ entry.details }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="cv-card">
            <h3 class="card-title">{{ t("cv.awardsAndHonors") }}</h3>
            <div class="list-stack">
              <div
                v-for="honor in props.honors"
                :key="`${honor.year}-${honor.title}`"
                class="list-item"
              >
                <div class="list-icon honor-icon">
                  <v-icon icon="mdi-medal-outline" size="18" />
                </div>
                <div class="list-content">
                  <h4 class="list-title">{{ honor.title }}</h4>
                  <p class="list-subtitle">{{ honor.issuer }} · {{ honor.year }}</p>
                  <p class="list-detail">{{ honor.description }}</p>
                </div>
              </div>
            </div>
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
}

.section-heading {
  margin-bottom: 2rem;
}

.section-heading h2 {
  margin: 0.3rem 0 0;
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--page-text);
}

.kicker {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary);
}

.cv-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 1.5rem;
}

.cv-column {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.cv-card {
  padding: 1.5rem;
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid var(--border-color);
  border-radius: 12px;
}

.card-title {
  margin: 0 0 1.25rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--page-text);
}

.appointments-stack {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.appointment-item {
  padding: 1rem 1.25rem;
  background: rgba(15, 23, 42, 0.4);
  border: 1px solid var(--border-color);
  border-radius: 8px;
}

.appointment-header {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.appointment-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: var(--primary-muted);
  border-radius: 8px;
  color: var(--primary);
  flex-shrink: 0;
}

.appointment-meta {
  flex: 1;
  min-width: 0;
}

.appointment-role {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--page-text);
}

.appointment-info {
  margin: 0.15rem 0 0;
  font-size: 0.8rem;
  color: var(--page-text-muted);
}

.appointment-period {
  flex-shrink: 0;
  padding: 0.2rem 0.5rem;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--primary);
  background: var(--primary-muted);
  border-radius: 4px;
}

.appointment-summary {
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--page-text-muted);
}

.highlights-wrap {
  margin-top: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.highlight-badge-link {
  display: inline-flex;
  border-radius: 4px;
  transition: transform 0.15s ease, opacity 0.15s ease;
}

.highlight-badge-link:hover {
  transform: translateY(-1px);
  opacity: 0.9;
}

.highlight-badge {
  display: block;
  height: 20px;
}

.list-stack {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.list-item {
  display: flex;
  gap: 0.75rem;
}

.list-icon {
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

.honor-icon {
  background: rgba(251, 191, 36, 0.15);
  color: #fbbf24;
}

.list-content {
  flex: 1;
  min-width: 0;
}

.list-title {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--page-text);
}

.list-subtitle {
  margin: 0.15rem 0 0;
  font-size: 0.8rem;
  color: var(--page-text-muted);
}

.list-detail {
  margin: 0.4rem 0 0;
  font-size: 0.8rem;
  line-height: 1.5;
  color: rgba(148, 163, 184, 0.7);
}

@media (width <= 960px) {
  .cv-grid {
    grid-template-columns: 1fr;
  }
}
</style>
