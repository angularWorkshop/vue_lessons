<script setup>
const profileName = defineModel();
</script>

<template>
  <label class="field">
    Profile name
    <input type="text" v-model="profileName" />
  </label>
</template>

<style scoped>
.field {
  display: grid;
  gap: 8px;
}
</style>
