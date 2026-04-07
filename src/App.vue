<script setup>
import { themePanelSeed } from './theme-panel-seed.js';

const themePanel = {
  ...themePanelSeed,
};

// TODO: make the panel reactive and connect class/style bindings.
</script>

<template>
  <section class="theme-panel">
    <p class="eyebrow">TODO mode</p>
    <h1>TODO title</h1>
    <p>TODO hint</p>
    <button type="button">TODO action</button>
  </section>
</template>

<style scoped>
.theme-panel {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  gap: 12px;
  align-content: center;
  border: 2px solid transparent;
  font-family: Arial, sans-serif;
}

.theme-panel--light {
  box-shadow: 0 20px 60px rgba(66, 184, 131, 0.12);
}

.eyebrow {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h1, p, button {
  margin: 0;
}

h1 {
  font-size: 38px;
  line-height: 1.1;
}

p {
  font-size: 18px;
}

button {
  width: fit-content;
  padding: 12px 18px;
  border: 0;
  border-radius: 999px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
}
</style>
