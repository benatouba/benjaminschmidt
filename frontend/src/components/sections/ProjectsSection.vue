<script setup lang="ts">
import { resolveKnownTechBadge } from "@/data/techBadges";
import { useI18n } from "vue-i18n";

import type { ResearchProject } from "@/types/site";

const props = withDefaults(defineProps<{
  projects: ResearchProject[];
  showHeading?: boolean;
}>(), {
  showHeading: true,
});

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
    <v-container fluid>
      <div v-if="props.showHeading" class="section-heading reveal-up" style="--delay: 40ms">
        <p class="kicker">{{ t("projects.kicker") }}</p>
        <h2>{{ t("projects.heading") }}</h2>
        <p class="section-copy">{{ t("projects.copy") }}</p>
      </div>

      <div class="projects-grid">
        <article
          v-for="(project, index) in props.projects"
          :key="project.name"
          class="project-card reveal-up"
          :style="`--delay: ${100 + index * 80}ms`"
        >
          <div class="card-top">
            <div>
              <p class="project-timeframe">{{ project.timeframe }}</p>
              <h3 class="project-title">{{ project.name }}</h3>
            </div>
            <span class="status-badge" :style="{ '--status-color': projectStatusColor(project.status) }">
              {{ t(`projects.status.${project.status}`) }}
            </span>
          </div>

          <p class="project-summary">{{ project.summary }}</p>

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
                :width="badge.width ?? 80"
                :height="badge.height ?? 20"
                loading="lazy"
                decoding="async"
                class="stack-badge"
              />
            </a>
          </div>

          <div class="outcomes-panel">
            <p class="outcomes-label">{{ t("projects.outcomes") }}</p>
            <ul class="outcomes-list">
              <li v-for="outcome in project.outcomes" :key="outcome">
                {{ outcome }}
              </li>
            </ul>
          </div>

          <a v-if="project.link" :href="project.link" target="_blank" rel="noreferrer" class="project-link">
            {{ t("projects.viewProject") }}
            <v-icon icon="mdi-arrow-top-right" size="16" />
          </a>
        </article>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.kicker {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary);
}

.section-copy {
  margin: 0.55rem 0 0;
  max-width: 70ch;
  font-size: 0.96rem;
  line-height: 1.7;
  color: var(--page-text-muted);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(360px, 100%), 1fr));
  gap: 1rem;
  align-items: stretch;
}

.project-card {
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid var(--border-color);
  border-radius: 14px;
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.9rem;
}

.project-timeframe {
  margin: 0;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary);
}

.project-title {
  margin: 0.35rem 0 0;
  font-size: 1.1rem;
  font-weight: 650;
  line-height: 1.35;
  color: var(--page-text);
}

.status-badge {
  flex-shrink: 0;
  padding: 0.24rem 0.55rem;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--status-color);
  background: color-mix(in srgb, var(--status-color) 15%, transparent);
  border-radius: 999px;
}

.project-summary {
  margin: 0.85rem 0 0;
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--page-text-muted);
}

.stack-badges-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.9rem;
}

.stack-badge-link {
  display: inline-flex;
  align-items: center;
}

.stack-badge {
  display: block;
  width: auto;
  height: 20px;
}

.outcomes-panel {
  margin-top: 1rem;
  padding: 0.95rem 1rem;
  border-radius: 12px;
  background: rgba(15, 23, 42, 0.34);
  border: 1px solid var(--border-color);
}

.outcomes-label {
  margin: 0;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--primary);
}

.outcomes-list {
  margin: 0.6rem 0 0;
  padding: 0 0 0 1.1rem;
  font-size: 0.85rem;
  line-height: 1.7;
  color: var(--page-text-muted);
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: auto;
  padding-top: 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--primary);
  text-decoration: none;
}
</style>
