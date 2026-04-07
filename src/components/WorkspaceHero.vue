<script setup>
import { workspaceOverview } from '../workspace-overview.js';
</script>

<template>
  <section class="hero-card">
    <p class="hero-card__eyebrow">TODO label</p>
    <h1>TODO title</h1>
    <p>TODO welcome</p>
    <p>TODO track</p>
  </section>
</template>

<style scoped>
.hero-card {
  display: grid;
  gap: 10px;
  padding: 24px;
  border-radius: 24px;
  background: #ffffff;
  color: #1e1b4b;
  box-shadow: 0 20px 40px rgba(30, 27, 75, 0.08);
}

.hero-card__eyebrow {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #6366f1;
}

h1,
p {
  margin: 0;
}
</style>
