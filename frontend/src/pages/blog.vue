<script setup lang="ts">
import { useI18n } from "vue-i18n";

import PageSectionShell from "@/components/layout/PageSectionShell.vue";
import BlogSection from "@/components/sections/BlogSection.vue";
import { useSiteContent } from "@/composables/useSiteContent";

const { t } = useI18n({ useScope: "global" });
const content = useSiteContent();
</script>

<template>
  <PageSectionShell :title="t('pages.blog.title')" :kicker="t('pages.blog.kicker')">
    <BlogSection :posts="content.blogPosts" />
  </PageSectionShell>
</template>

<style scoped>
:deep(#blog) {
  scroll-margin-top: 0;
}
</style>
