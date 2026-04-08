<script setup>
defineProps({
  eyebrow: String,
  title: String,
  subtitle: String,
});
</script>

<template>
  <section class="hero">
    <p>{{ eyebrow }}</p>
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  gap: 8px;
}
</style>
