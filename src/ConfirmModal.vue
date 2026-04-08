<script setup lang="ts">
defineProps<{ title: string }>();
const emit = defineEmits(['confirm']);
</script>

<template>
  <section class="panel stack">
    <h2>{{ title }}</h2>
    <button type="button" @click="emit('confirm')">Confirm</button>
  </section>
</template>
