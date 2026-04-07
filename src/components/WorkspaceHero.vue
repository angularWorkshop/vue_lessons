<script setup>
import { workspaceOverview } from '../workspace-overview.js';
</script>

<template>
  <section class="hero-card">
    <p class="hero-card__eyebrow">{{ workspaceOverview.productLabel }}</p>
    <h1>{{ workspaceOverview.title }}</h1>
    <p>Добро пожаловать, {{ workspaceOverview.studentName }}. Теперь экран читается как дерево компонентов, а не как один длинный файл.</p>
    <p>Текущий трек: {{ workspaceOverview.currentTrack }}</p>
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
