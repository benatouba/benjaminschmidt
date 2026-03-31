<script setup lang="ts">
import PageSectionShell from "@/components/layout/PageSectionShell.vue";
import ProjectsSection from "@/components/sections/ProjectsSection.vue";
import { projects } from "@/data/siteContent";
</script>

<template>
  <PageSectionShell title="Scientific Projects" kicker="Software and Initiatives">
    <ProjectsSection :projects="projects" />
  </PageSectionShell>
</template>

<style scoped>
:deep(#projects) {
  scroll-margin-top: 0;
}
</style>
