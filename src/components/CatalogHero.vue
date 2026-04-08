<script setup>
defineProps({
  title: String,
  subtitle: String,
});
</script>

<template>
  <header class="hero">
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
  </header>
</template>

<style scoped>
.hero {
  display: grid;
  gap: 8px;
}
</style>
