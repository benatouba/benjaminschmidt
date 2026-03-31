<script setup lang="ts">
import PageSectionShell from "@/components/layout/PageSectionShell.vue";
import BlogSection from "@/components/sections/BlogSection.vue";
import { blogPosts } from "@/data/siteContent";
</script>

<template>
  <PageSectionShell title="Blog" kicker="Research Notes">
    <BlogSection :posts="blogPosts" />
  </PageSectionShell>
</template>

<style scoped>
:deep(#blog) {
  scroll-margin-top: 0;
}
</style>
