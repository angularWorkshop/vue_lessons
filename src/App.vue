<script setup>
import { reactive } from 'vue';
import { actionPanelSeed } from './action-panel-seed.js';

const panel = reactive({
  ...actionPanelSeed,
});

function handlePrimaryAction() {
  panel.clickCount += 1;
  panel.status = 'active';
  panel.lastAction = 'primary';
}

function handleSecondaryAction() {
  panel.status = 'review';
  panel.lastAction = 'secondary';
}
</script>

<template>
  <section class="action-panel">
    <p>{{ panel.eyebrow }}</p>
    <h1>{{ panel.title }}</h1>
    <p>������: {{ panel.status }}</p>
    <p>������: {{ panel.clickCount }}</p>
    <p>��������� ��������: {{ panel.lastAction }}</p>
    <div class="actions">
      <button type="button" @click="handlePrimaryAction">{{ panel.primaryLabel }}</button>
      <button type="button" @click="handleSecondaryAction">{{ panel.secondaryLabel }}</button>
    </div>
  </section>
</template>

<style scoped>
.action-panel {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  gap: 12px;
  align-content: center;
  background: linear-gradient(180deg, #eff6ff 0%, #ffffff 100%);
  color: #0f172a;
  font-family: Arial, sans-serif;
}

.actions {
  display: flex;
  gap: 12px;
}

button {
  border: 0;
  border-radius: 999px;
  padding: 12px 16px;
  background: #2563eb;
  color: white;
  font-weight: 700;
}
</style>
