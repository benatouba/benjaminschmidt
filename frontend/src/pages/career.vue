<script setup lang="ts">
import PageSectionShell from "@/components/layout/PageSectionShell.vue";
import CareerSection from "@/components/sections/CareerSection.vue";
import { careerStages } from "@/data/siteContent";
</script>

<template>
  <PageSectionShell title="Scientific Career" kicker="Academic Timeline">
    <CareerSection :stages="careerStages" />
  </PageSectionShell>
</template>

<style scoped>
:deep(#career) {
  scroll-margin-top: 0;
}
</style>
