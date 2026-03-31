<script setup lang="ts">
defineProps<{
  title: string;
  kicker?: string;
}>();
</script>

<template>
  <v-container class="section-shell px-4 px-sm-6 px-md-8" fluid>
    <div class="section-heading reveal-up" style="--delay: 40ms">
      <p v-if="kicker" class="kicker">{{ kicker }}</p>
      <h1 class="page-title">{{ title }}</h1>
    </div>

    <div class="content-slot reveal-up" style="--delay: 120ms">
      <slot></slot>
    </div>
  </v-container>
</template>

<style scoped>
.section-shell {
  padding-top: clamp(2rem, 5vw, 3rem);
  padding-bottom: clamp(2.6rem, 6vw, 4.2rem);
}

.section-heading {
  margin-bottom: 1.4rem;
}

.kicker {
  margin: 0;
  font-size: 0.82rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgb(90 125 124);
}

.page-title {
  margin: 0.24rem 0 0;
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3vw, 2.4rem);
  color: rgb(8 34 42);
}

.content-slot {
  min-height: min(56vh, 620px);
}
</style>
