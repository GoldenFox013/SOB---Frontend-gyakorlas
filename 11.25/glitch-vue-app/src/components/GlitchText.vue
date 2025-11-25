<template>
  <div class="glitch" data-text="">{{ text }}</div>
</template>

<script>
export default {
  name: 'GlitchText',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.glitch {
  position: relative;
  font-size: 3em;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  animation: glitch 2s infinite;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
}

.glitch::before {
  left: 2px;
  text-shadow: -2px 0 red;
  animation: glitchTop 2s infinite;
}

.glitch::after {
  left: -2px;
  top: 2px;
  text-shadow: -2px 0 cyan;
  animation: glitchBottom 2s infinite;
}

@keyframes glitch {
  0% {
    text-shadow: 2px 0 red, -2px 0 cyan;
  }
  20% {
    text-shadow: -2px 0 red, 2px 0 cyan;
  }
  40% {
    text-shadow: 2px 0 red, -2px 0 cyan;
  }
  60% {
    text-shadow: -2px 0 red, 2px 0 cyan;
  }
  80% {
    text-shadow: 2px 0 red, -2px 0 cyan;
  }
  100% {
    text-shadow: -2px 0 red, 2px 0 cyan;
  }
}

@keyframes glitchTop {
  0% {
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    transform: translate(0);
  }
  20% {
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    transform: translate(-2px, -2px);
  }
  40% {
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    transform: translate(2px, 2px);
  }
  60% {
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    transform: translate(-2px, 2px);
  }
  80% {
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    transform: translate(2px, -2px);
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    transform: translate(0);
  }
}

@keyframes glitchBottom {
  0% {
    clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
    transform: translate(0);
  }
  20% {
    clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
    transform: translate(2px, 2px);
  }
  40% {
    clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
    transform: translate(-2px, -2px);
  }
  60% {
    clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
    transform: translate(2px, -2px);
  }
  80% {
    clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
    transform: translate(-2px, 2px);
  }
  100% {
    clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
    transform: translate(0);
  }
}
</style>