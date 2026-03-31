<script setup lang="ts">
import PageSectionShell from "@/components/layout/PageSectionShell.vue";
import PublicationsSection from "@/components/sections/PublicationsSection.vue";
import { publications } from "@/data/siteContent";
</script>

<template>
  <PageSectionShell title="Scientific Publications" kicker="Selected Work">
    <PublicationsSection :publications="publications" />
  </PageSectionShell>
</template>

<style scoped>
:deep(#publications) {
  scroll-margin-top: 0;
}
</style>
