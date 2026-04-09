<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const visible = ref(false);
let ticking = false;

const onScroll = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    visible.value = window.scrollY > window.innerHeight;
    ticking = false;
  });
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <Transition name="fade-up">
    <button
      v-if="visible"
      class="scroll-top-btn"
      aria-label="Scroll to top"
      @click="scrollToTop"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  </Transition>
</template>

<style scoped>
.scroll-top-btn {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  color: var(--page-text);
  background: rgba(49, 50, 68, 0.86);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  backdrop-filter: blur(8px);
  cursor: pointer;
  transition:
    background 0.15s ease,
    border-color 0.15s ease;
}

.scroll-top-btn:hover {
  background: rgba(69, 71, 90, 0.95);
  border-color: rgba(250, 179, 135, 0.52);
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

@media (prefers-reduced-motion: reduce) {
  .fade-up-enter-active,
  .fade-up-leave-active {
    transition: none;
  }
}
</style>
