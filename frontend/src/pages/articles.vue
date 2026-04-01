<script setup lang="ts">
import { useI18n } from "vue-i18n";

import PageSectionShell from "@/components/layout/PageSectionShell.vue";
import ArticleHistorySection from "@/components/sections/ArticleHistorySection.vue";
import { useSiteContent } from "@/composables/useSiteContent";

const { t } = useI18n({ useScope: "global" });
const content = useSiteContent();
</script>

<template>
  <PageSectionShell :title="t('pages.articles.title')" :kicker="t('pages.articles.kicker')">
    <ArticleHistorySection :items="content.articleHistory" />
  </PageSectionShell>
</template>

<style scoped>
:deep(#articles) {
  scroll-margin-top: 0;
}
</style>
