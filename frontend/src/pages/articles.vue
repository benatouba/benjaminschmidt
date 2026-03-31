<script setup lang="ts">
import PageSectionShell from "@/components/layout/PageSectionShell.vue";
import ArticleHistorySection from "@/components/sections/ArticleHistorySection.vue";
import { articleHistory } from "@/data/siteContent";
</script>

<template>
  <PageSectionShell title="Article History" kicker="Writing Portfolio">
    <ArticleHistorySection :items="articleHistory" />
  </PageSectionShell>
</template>

<style scoped>
:deep(#articles) {
  scroll-margin-top: 0;
}
</style>
