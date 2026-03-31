<script setup lang="ts">
import type { BlogPost } from "@/types/site";

const props = defineProps<{
  posts: BlogPost[];
}>();
</script>

<template>
  <section id="blog" class="section-block section-anchor">
    <v-container class="px-4 px-sm-6 px-md-8" fluid>
      <div class="section-heading reveal-up" style="--delay: 40ms">
        <p class="kicker">Blog</p>
        <h2>Notes from projects, methods, and publication work</h2>
      </div>

      <v-row class="mt-1" dense>
        <v-col
          v-for="(post, index) in props.posts"
          :key="post.slug"
          cols="12"
          md="4"
          class="reveal-up"
          :style="`--delay: ${120 + index * 80}ms`"
        >
          <v-card class="blog-card h-100" variant="flat">
            <v-card-item>
              <template #prepend>
                <v-avatar color="primary" variant="tonal" size="34">
                  <v-icon icon="mdi-post-outline" />
                </v-avatar>
              </template>
              <v-card-title class="blog-title">{{ post.title }}</v-card-title>
              <v-card-subtitle>{{ post.date }} · {{ post.readMinutes }} min read</v-card-subtitle>
            </v-card-item>

            <v-card-text>
              <p class="summary">{{ post.summary }}</p>
              <div class="tag-wrap">
                <v-chip
                  v-for="tag in post.tags"
                  :key="tag"
                  size="x-small"
                  variant="outlined"
                  color="secondary"
                >
                  {{ tag }}
                </v-chip>
              </div>

              <div v-if="post.relatedArticles?.length" class="related-wrap">
                <p class="related-label">Related articles</p>
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
            </v-card-text>

            <v-card-actions>
              <v-btn
                v-if="post.href"
                :href="post.href"
                target="_blank"
                rel="noreferrer"
                variant="text"
                append-icon="mdi-open-in-new"
              >
                Read post
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.section-anchor {
  scroll-margin-top: 110px;
}

.section-block {
  padding-block: clamp(2.2rem, 5vw, 3.8rem);
}

.section-heading h2 {
  margin: 0.25rem 0 0;
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 2.6vw, 2.1rem);
  color: rgb(8 34 42);
}

.kicker {
  margin: 0;
  font-size: 0.82rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgb(90 125 124);
}

.blog-card {
  border: 1px solid rgb(15 76 92 / 16%);
}

.blog-title {
  font-size: 1.02rem;
  line-height: 1.36;
}

.summary {
  margin: 0;
  color: rgb(13 52 63 / 88%);
}

.tag-wrap {
  margin-top: 0.8rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.related-wrap {
  margin-top: 0.85rem;
}

.related-label {
  margin: 0;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgb(90 125 124);
}

.related-list {
  margin: 0.4rem 0 0;
  padding: 0 0 0 1rem;
  color: rgb(13 52 63 / 84%);
}

.related-list a {
  color: rgb(15 76 92);
  text-decoration: none;
}

.related-list a:hover {
  text-decoration: underline;
}
</style>
