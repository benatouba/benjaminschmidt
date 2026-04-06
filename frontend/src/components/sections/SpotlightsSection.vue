<script setup lang="ts">
import { resolveKnownTechBadge } from "@/data/techBadges";
import { useI18n } from "vue-i18n";

import type { BlogPost } from "@/types/site";

const props = defineProps<{
  posts: BlogPost[];
}>();

const { t } = useI18n({ useScope: "global" });

const postTagBadges = (post: BlogPost) =>
  post.tags
    .map((tag) => {
      const badge = resolveKnownTechBadge(tag);
      if (!badge) return null;

      return {
        key: `${post.slug}-${tag}`,
        ...badge,
      };
    })
    .filter((badge): badge is NonNullable<typeof badge> => badge !== null);
</script>

<template>
  <section id="spotlights" class="section-block section-anchor">
    <v-container fluid>
      <div class="section-heading reveal-up" style="--delay: 40ms">
        <h2>{{ t("spotlights.heading") }}</h2>
      </div>

      <div class="blog-grid">
        <article
          v-for="(post, index) in props.posts"
          :key="post.slug"
          class="blog-card reveal-up"
          :style="`--delay: ${120 + index * 80}ms`"
        >
          <div class="card-header">
            <div class="card-icon">
              <v-icon icon="mdi-post-outline" size="18" />
            </div>
            <div class="card-meta">
              <h3 class="blog-title">{{ post.title }}</h3>
              <p class="blog-date">
                {{ post.date }}
              </p>
            </div>
          </div>

          <p class="blog-summary">{{ post.summary }}</p>

          <div v-if="postTagBadges(post).length" class="tags-wrap">
            <a
              v-for="badge in postTagBadges(post)"
              :key="badge.key"
              :href="badge.href"
              :target="badge.href ? '_blank' : undefined"
              :rel="badge.href ? 'noreferrer' : undefined"
              class="tag-badge-link"
            >
              <img
                :src="badge.image"
                :alt="badge.label"
                :width="badge.width ?? 80"
                :height="badge.height ?? 20"
                loading="lazy"
                decoding="async"
                class="tag-badge"
              />
            </a>
          </div>

          <div v-if="post.relatedArticles?.length" class="related-section">
            <p class="related-label">{{ t("spotlights.relatedArticles") }}</p>
            <ul class="related-list">
              <li
                v-for="article in post.relatedArticles"
                :key="`${post.slug}-${article.title}`"
              >
                <a v-if="article.href" :href="article.href" target="_blank" rel="noreferrer">
                  {{ article.title }}
                </a>
                <span v-else>{{ article.title }}</span>
              </li>
            </ul>
          </div>

          <a
            v-if="post.href"
            :href="post.href"
            target="_blank"
            rel="noreferrer"
            class="blog-link"
          >
            {{ t("spotlights.viewProject") }}
            <v-icon icon="mdi-arrow-top-right" size="16" />
          </a>
        </article>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.25rem;
}

.blog-card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  transition: border-color 0.2s ease;
}

.blog-card:hover {
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
  width: 36px;
  height: 36px;
  background: var(--primary-muted);
  border-radius: 8px;
  color: var(--primary);
  flex-shrink: 0;
}

.card-meta {
  flex: 1;
  min-width: 0;
}

.blog-title {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
  color: var(--page-text);
}

.blog-date {
  margin: 0.2rem 0 0;
  font-size: 0.8rem;
  color: var(--page-text-muted);
}

.blog-summary {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--page-text-muted);
}

.tags-wrap {
  margin-top: 0.875rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag-badge-link {
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  padding-block: 2px;
  border-radius: 4px;
  transition: transform 0.15s ease, opacity 0.15s ease;
}

.tag-badge-link:hover {
  transform: translateY(-1px);
  opacity: 0.9;
}

.tag-badge {
  display: block;
  width: auto;
  height: 20px;
}

.related-section {
  margin-top: 1rem;
  padding-top: 0.875rem;
  border-top: 1px solid var(--border-color);
}

.related-label {
  margin: 0 0 0.5rem;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--page-text-muted);
}

.related-list {
  margin: 0;
  padding: 0 0 0 1rem;
  font-size: 0.8rem;
  line-height: 1.75;
  color: var(--page-text-muted);
}

.related-list a {
  color: var(--primary);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  min-height: 24px;
}

.related-list a:hover {
  text-decoration: underline;
}

.blog-link {
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

.blog-link:hover {
  opacity: 0.8;
}
</style>
