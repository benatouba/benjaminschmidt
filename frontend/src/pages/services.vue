<script setup lang="ts">
import PageSectionShell from "@/components/layout/PageSectionShell.vue";
import ServicesSection from "@/components/sections/ServicesSection.vue";
import { services } from "@/data/siteContent";
</script>

<template>
  <PageSectionShell title="Services" kicker="Professional Website Features">
    <ServicesSection :services="services" />
  </PageSectionShell>
</template>

<style scoped>
:deep(#services) {
  scroll-margin-top: 0;
}
</style>
