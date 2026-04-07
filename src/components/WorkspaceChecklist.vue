<script setup>
import { workspaceOverview } from '../workspace-overview.js';
</script>

<template>
  <section class="checklist-card">
    <h2>{{ workspaceOverview.checklistTitle }}</h2>
    <ul>
      <li>{{ workspaceOverview.itemOne }}</li>
      <li>{{ workspaceOverview.itemTwo }}</li>
    </ul>
    <button type="button">{{ workspaceOverview.ctaLabel }}</button>
  </section>
</template>

<style scoped>
.checklist-card {
  display: grid;
  gap: 12px;
  padding: 24px;
  border-radius: 24px;
  background: #ffffff;
  color: #1f2937;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
}

h2,
ul,
li {
  margin: 0;
}

ul {
  padding-left: 20px;
  display: grid;
  gap: 8px;
}

button {
  width: fit-content;
  padding: 12px 18px;
  border: 0;
  border-radius: 999px;
  background: #111827;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
}
</style>
