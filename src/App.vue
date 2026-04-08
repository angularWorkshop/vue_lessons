<script setup>
import { computed, reactive } from 'vue';
import SearchBox from './components/SearchBox.vue';
import { searchWorkspaceSeed } from './search-workspace-seed.js';

const screen = reactive({
  ...searchWorkspaceSeed,
});

const visibleLessons = computed(() => screen.lessons.filter(lesson => lesson.title.toLowerCase().includes(screen.query.toLowerCase())));
</script>

<template>
  <main class="workspace">
    <SearchBox v-model="screen.query" />
    <ul>
      <li v-for="lesson in visibleLessons" :key="lesson.id">{{ lesson.title }}</li>
    </ul>
  </main>
</template>

<style scoped>
.workspace {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  gap: 16px;
  align-content: start;
  background: linear-gradient(180deg, #dcfce7 0%, #ffffff 100%);
  color: #14532d;
  font-family: Arial, sans-serif;
}
</style>
