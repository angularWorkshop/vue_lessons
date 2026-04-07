<script setup>
import { bootcampScreen } from './bootcamp-screen.js';
</script>

<template>
  <main class="screen" data-testid="app-shell">
    <p class="eyebrow">TODO label</p>
    <h1>TODO title</h1>
    <p>TODO welcome</p>
    <p>TODO track</p>
    <p>TODO next lesson</p>
    <button type="button">TODO action</button>
  </main>
</template>

<style scoped>
.screen {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  gap: 12px;
  align-content: center;
  background: linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%);
  color: #123524;
  font-family: Arial, sans-serif;
}

.eyebrow {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #42b883;
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
  background: #42b883;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
}
</style>
