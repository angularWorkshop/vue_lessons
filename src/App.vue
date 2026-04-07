<script setup>
import { reactive } from 'vue';
import { themePanelSeed } from './theme-panel-seed.js';

const themePanel = reactive({
  ...themePanelSeed,
});
</script>

<template>
  <section
    class="theme-panel"
    :class="['theme-panel--' + themePanel.mode]"
    :style="{
      backgroundColor: themePanel.surfaceColor,
      color: themePanel.textColor,
      borderColor: themePanel.accentColor,
    }"
  >
    <p class="eyebrow" :style="{ color: themePanel.accentColor }">{{ themePanel.mode }} mode</p>
    <h1>{{ themePanel.title }}</h1>
    <p>{{ themePanel.hint }}</p>
    <button type="button" :style="{ backgroundColor: themePanel.accentColor }">{{ themePanel.ctaLabel }}</button>
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
