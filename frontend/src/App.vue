<script setup lang="ts">
import PageBackground from "@/components/layout/PageBackground.vue";
import SiteFooter from "@/components/layout/SiteFooter.vue";
import SiteHeader from "@/components/layout/SiteHeader.vue";
import { navItems, profile } from "@/data/siteContent";
</script>

<template>
  <v-app>
    <PageBackground />

    <SiteHeader :name="profile.name" :headline="profile.headline" :nav-items="navItems" />

    <v-main>
      <RouterView />
    </v-main>

    <SiteFooter />
  </v-app>
</template>
