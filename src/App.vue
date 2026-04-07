<script setup>
import WorkspaceHero from './components/WorkspaceHero.vue';
import WorkspaceChecklist from './components/WorkspaceChecklist.vue';
</script>

<template>
  <main class="workspace-shell">
    <WorkspaceHero />
    <WorkspaceChecklist />
  </main>
</template>

<style scoped>
.workspace-shell {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  gap: 18px;
  background: linear-gradient(180deg, #eef2ff 0%, #ffffff 100%);
  font-family: Arial, sans-serif;
}
</style>
