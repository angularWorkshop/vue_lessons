<script setup>
defineProps({
  summary: String,
});
</script>

<template>
  <section class="summary">{{ summary }}</section>
</template>

<style scoped>
.summary {
  padding: 12px 16px;
  border-radius: 16px;
  background: #e2e8f0;
}
</style>
