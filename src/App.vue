<script setup>
import { reactive } from 'vue';
import ProfileNameField from './components/ProfileNameField.vue';

const profile = reactive({
  name: 'Аня',
});
</script>

<template>
  <main class="workspace">
    <ProfileNameField v-model="profile.name" />
    <p>Preview: {{ profile.name }}</p>
  </main>
</template>

<style scoped>
.workspace {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  gap: 16px;
  align-content: start;
  background: linear-gradient(180deg, #fef9c3 0%, #ffffff 100%);
  color: #713f12;
  font-family: Arial, sans-serif;
}
</style>
