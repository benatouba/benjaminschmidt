<template>
  <div class="page-bg" aria-hidden="true">
    <div class="orb orb-a"></div>
    <div class="orb orb-b"></div>
    <div class="mesh"></div>
  </div>
</template>

<style scoped>
.page-bg {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
}

.orb {
  position: absolute;
  border-radius: 999px;
  filter: blur(1px);
  opacity: 0.72;
}

.orb-a {
  width: min(55vw, 740px);
  height: min(55vw, 740px);
  top: -24%;
  left: -10%;
  background: radial-gradient(circle at 30% 30%, rgb(217 143 61 / 25%), rgb(217 143 61 / 0%));
  animation: drift-a 18s ease-in-out infinite alternate;
}

.orb-b {
  width: min(46vw, 620px);
  height: min(46vw, 620px);
  right: -12%;
  top: 16%;
  background: radial-gradient(circle at 40% 40%, rgb(15 76 92 / 20%), rgb(15 76 92 / 0%));
  animation: drift-b 22s ease-in-out infinite alternate;
}

.mesh {
  position: absolute;
  inset: 0;
  opacity: 0.24;
  background-image:
    linear-gradient(to right, rgb(15 76 92 / 8%) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(15 76 92 / 8%) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: radial-gradient(circle at 50% 10%, black, transparent 70%);
}

@keyframes drift-a {
  from {
    transform: translate3d(0, 0, 0) scale(1);
  }

  to {
    transform: translate3d(2.5%, 4%, 0) scale(1.08);
  }
}

@keyframes drift-b {
  from {
    transform: translate3d(0, 0, 0) scale(1);
  }

  to {
    transform: translate3d(-2%, -3%, 0) scale(1.06);
  }
}
</style>
