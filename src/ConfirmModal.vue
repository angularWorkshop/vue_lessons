<script setup lang="ts">
defineProps<{ title: string }>();
const emit = defineEmits<{
  (event: 'confirm', payload: { accepted: true }): void;
}>();
</script>

<template>
  <section class="panel stack">
    <h2>{{ title }}</h2>
    <button type="button" @click="emit('confirm', { accepted: true })">Confirm</button>
  </section>
</template>
