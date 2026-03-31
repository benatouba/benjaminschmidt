<script setup lang="ts">
import PageSectionShell from "@/components/layout/PageSectionShell.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
import { contactLinks, profile } from "@/data/siteContent";
</script>

<template>
  <PageSectionShell title="Contact" kicker="Collaboration">
    <ContactSection :profile="profile" :links="contactLinks" />
  </PageSectionShell>
</template>

<style scoped>
:deep(#contact) {
  scroll-margin-top: 0;
}
</style>
