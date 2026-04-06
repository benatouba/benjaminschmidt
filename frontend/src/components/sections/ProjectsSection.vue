<script setup lang="ts">
import { resolveKnownTechBadge } from "@/data/techBadges";
import { useI18n } from "vue-i18n";

import type { ResearchProject } from "@/types/site";

const props = defineProps<{
  projects: ResearchProject[];
}>();

const { t } = useI18n({ useScope: "global" });

const projectStatusColor = (status: ResearchProject["status"]) => {
  if (status === "Active") return "var(--primary)";
  if (status === "Planning") return "#fbbf24";
  return "var(--page-text-muted)";
};

const projectTechBadges = (project: ResearchProject) =>
  project.stack
    .map((item) => {
      const badge = resolveKnownTechBadge(item);
      if (!badge) return null;

      return {
        key: `${project.name}-${item}`,
        ...badge,
      };
    })
    .filter((badge): badge is NonNullable<typeof badge> => badge !== null);
</script>

<template>
  <section id="projects" class="section-block section-anchor">
    <v-container class="px-4 px-sm-6 px-md-8" fluid>
      <div class="section-heading reveal-up" style="--delay: 40ms">
        <p class="kicker">{{ t("projects.kicker") }}</p>
        <h2>{{ t("projects.heading") }}</h2>
      </div>

      <div class="projects-grid">
        <article
          v-for="(project, index) in props.projects"
          :key="project.name"
          class="project-card reveal-up"
          :style="`--delay: ${100 + index * 90}ms`"
        >
          <div class="card-header">
            <h3 class="project-title">{{ project.name }}</h3>
            <span
              class="status-badge"
              :style="{ '--status-color': projectStatusColor(project.status) }"
            >
              {{ t(`projects.status.${project.status}`) }}
            </span>
          </div>
          <p class="project-timeframe">{{ project.timeframe }}</p>
          <p class="project-summary">{{ project.summary }}</p>

          <div class="meta-section">
            <p class="meta-label">{{ t("projects.stack") }}</p>
            <div v-if="projectTechBadges(project).length" class="stack-badges-wrap">
              <a
                v-for="badge in projectTechBadges(project)"
                :key="badge.key"
                :href="badge.href"
                :target="badge.href ? '_blank' : undefined"
                :rel="badge.href ? 'noreferrer' : undefined"
                class="stack-badge-link"
              >
                <img
                  :src="badge.image"
                  :alt="badge.label"
                  loading="lazy"
                  class="stack-badge"
                />
              </a>
            </div>
          </div>

          <div class="meta-section">
            <p class="meta-label">{{ t("projects.outcomes") }}</p>
            <ul class="outcomes-list">
              <li v-for="outcome in project.outcomes" :key="outcome">
                {{ outcome }}
              </li>
            </ul>
          </div>

          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noreferrer"
            class="project-link"
          >
            View Project
            <v-icon icon="mdi-arrow-top-right" size="16" />
          </a>
        </article>
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.25rem;
}

.project-card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.project-card:hover {
  border-color: rgba(34, 211, 238, 0.3);
  transform: translateY(-2px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.25rem;
}

.project-title {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--page-text);
  line-height: 1.4;
}

.status-badge {
  flex-shrink: 0;
  padding: 0.2rem 0.5rem;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--status-color);
  background: color-mix(in srgb, var(--status-color) 15%, transparent);
  border-radius: 4px;
}

.project-timeframe {
  margin: 0;
  font-size: 0.8rem;
  color: var(--page-text-muted);
}

.project-summary {
  margin: 0.75rem 0 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--page-text-muted);
}

.meta-section {
  margin-top: 1rem;
}

.meta-label {
  margin: 0 0 0.5rem;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(148, 163, 184, 0.7);
}

.stack-badges-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.stack-badge-link {
  display: inline-flex;
  border-radius: 4px;
  transition: transform 0.15s ease, opacity 0.15s ease;
}

.stack-badge-link:hover {
  transform: translateY(-1px);
  opacity: 0.9;
}

.stack-badge {
  display: block;
  height: 20px;
}

.outcomes-list {
  margin: 0;
  padding: 0 0 0 1.25rem;
  font-size: 0.85rem;
  line-height: 1.7;
  color: var(--page-text-muted);
}

.outcomes-list li {
  margin-bottom: 0.25rem;
}

.project-link {
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

.project-link:hover {
  opacity: 0.8;
}
</style>
