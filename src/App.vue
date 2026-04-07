<script setup>
import { repairScreen } from './repair-screen.js';
</script>

<template>
  <main class="repair-screen">
    <p class="eyebrow">{{ repairScreen.productLabel }}</p>
    <h1>{{ repairScreen.title }}</h1>
    <p>Статус проекта: {{ repairScreen.status }}</p>
    <p>Владелец: {{ repairScreen.owner }}</p>
    <p>{{ repairScreen.note }}</p>
    <button type="button">{{ repairScreen.ctaLabel }}</button>
  </main>
</template>

<style scoped>
.repair-screen {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  gap: 12px;
  align-content: center;
  background: linear-gradient(180deg, #ecfeff 0%, #ffffff 100%);
  color: #164e63;
  font-family: Arial, sans-serif;
}

.eyebrow {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0ea5e9;
}

h1 {
  margin: 0;
  font-size: 40px;
  line-height: 1.1;
}

p {
  margin: 0;
  max-width: 720px;
  font-size: 18px;
}

button {
  width: fit-content;
  margin-top: 8px;
  padding: 12px 18px;
  border: 0;
  border-radius: 999px;
  background: #0ea5e9;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
}
</style>
