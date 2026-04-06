<script setup lang="ts">
defineProps<{
  title: string;
  kicker?: string;
}>();
</script>

<template>
  <v-container class="section-shell" fluid>
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
  padding-top: clamp(2.5rem, 6vw, 4rem);
  padding-bottom: clamp(3rem, 7vw, 5rem);
}

.section-heading {
  margin-bottom: 1.75rem;
}

.kicker {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary);
}

.page-title {
  margin: 0.3rem 0 0;
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--page-text);
}

.content-slot {
  min-height: min(56vh, 620px);
}

@media print {
  .content-slot {
    min-height: 0;
  }

  .kicker {
    color: #666;
  }

  .page-title {
    color: black;
  }
}
</style>
