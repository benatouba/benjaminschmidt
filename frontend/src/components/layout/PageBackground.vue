<template>
  <div class="page-bg" aria-hidden="true">
    <div class="gradient-orb orb-a"></div>
    <div class="gradient-orb orb-b"></div>
    <div class="mesh"></div>
    <div class="noise"></div>
  </div>
</template>

<style scoped>
.page-bg {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
  background: #0f172a;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.4;
}

.orb-a {
  width: min(70vw, 900px);
  height: min(70vw, 900px);
  top: -30%;
  left: -20%;
  background: radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.3), transparent 60%);
  animation: drift-a 20s ease-in-out infinite alternate;
}

.orb-b {
  width: min(60vw, 700px);
  height: min(60vw, 700px);
  right: -15%;
  bottom: -20%;
  background: radial-gradient(circle at 60% 60%, rgba(99, 102, 241, 0.25), transparent 60%);
  animation: drift-b 25s ease-in-out infinite alternate;
}

.mesh {
  position: absolute;
  inset: 0;
  opacity: 0.08;
  background-image:
    linear-gradient(to right, rgba(148, 163, 184, 0.4) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(148, 163, 184, 0.4) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent);
}

.noise {
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E");
}

@keyframes drift-a {
  from {
    transform: translate3d(0, 0, 0) scale(1);
  }
  to {
    transform: translate3d(5%, 8%, 0) scale(1.1);
  }
}

@keyframes drift-b {
  from {
    transform: translate3d(0, 0, 0) scale(1);
  }
  to {
    transform: translate3d(-4%, -6%, 0) scale(1.08);
  }
}
</style>
