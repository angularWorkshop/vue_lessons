<script setup lang="ts">
import { reactive } from 'vue';
interface ProfileForm { name: string; email: string; }
const form = reactive<ProfileForm>({ name: '', email: '' });
</script>
<template><main class="screen"><input v-model="form.name" /><input v-model="form.email" /><p>{{ form.name || 'Guest' }}</p></main></template>
<style scoped>:global(body) {
  margin: 0;
}

.screen {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  gap: 16px;
  align-content: start;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  color: #0f172a;
  font-family: Arial, sans-serif;
}

.panel {
  padding: 18px;
  border-radius: 18px;
  background: white;
  border: 1px solid #dbeafe;
}

.stack {
  display: grid;
  gap: 12px;
}

.row {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
}

button,
input,
select {
  font: inherit;
}

button {
  border: 0;
  border-radius: 12px;
  padding: 10px 14px;
  background: #2563eb;
  color: white;
  cursor: pointer;
}

button[disabled] {
  opacity: 0.55;
  cursor: not-allowed;
}

input,
select {
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid #cbd5e1;
}

ul {
  margin: 0;
  padding-left: 20px;
}
</style>