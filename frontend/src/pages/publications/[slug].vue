<script setup lang="ts">
import { computed, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

import PageSectionShell from "@/components/layout/PageSectionShell.vue";
import PublicationDetailSection from "@/components/sections/PublicationDetailSection.vue";
import { useSiteContent } from "@/composables/useSiteContent";

const route = useRoute() as ReturnType<typeof useRoute> & {
  params: {
    slug?: string | string[];
  };
};
const { t } = useI18n({ useScope: "global" });
const content = useSiteContent();

const slug = computed(() =>
  Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug,
);
const hasRequestedSlug = computed(() => Boolean(slug.value));

const insight = computed(() =>
  content.value.publicationInsights.find((entry) => entry.slug === slug.value),
);

const pageTitle = computed(() => {
  if (insight.value) {
    return insight.value.title;
  }

  if (hasRequestedSlug.value) {
    return t("pages.publications.notFoundTitle");
  }

  return t("pages.publications.title");
});

const pageCopy = computed(() => {
  if (insight.value) {
    return insight.value.recruiterTakeaway;
  }

  if (hasRequestedSlug.value) {
    return t("pages.publications.notFoundCopy");
  }

  return t("pages.publications.copy");
});

watchEffect(() => {
  document.title = `${pageTitle.value} | Dr. Benjamin Schmidt`;
});
</script>

<template>
  <PageSectionShell
    :title="pageTitle"
    :kicker="t('pages.publications.kicker')"
    :copy="pageCopy"
  >
    <PublicationDetailSection v-if="insight" :insight="insight" />
    <section v-else class="missing-entry">
      <div class="missing-card">
        <p class="missing-copy">{{ t("pages.publications.notFoundCopy") }}</p>
        <RouterLink to="/publications" class="missing-link">
          <v-icon icon="mdi-arrow-left" size="16" />
          {{ t("publicationDetail.backToPublications") }}
        </RouterLink>
      </div>
    </section>
  </PageSectionShell>
</template>

<style scoped>
.missing-entry {
  min-height: 18rem;
}

.missing-card {
  padding: 1.2rem;
  border: 1px solid var(--border-color);
  border-radius: 14px;
  background: rgba(49, 50, 68, 0.56);
}

.missing-copy {
  margin: 0;
  max-width: 60ch;
  font-size: 0.96rem;
  line-height: 1.7;
  color: var(--page-text-muted);
}

.missing-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 1rem;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--primary);
  text-decoration: none;
}
</style>
