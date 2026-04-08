<script setup>
const props = defineProps({
  modelValue: String,
});
</script>

<template>
  <label class="field">
    Profile name
    <input type="text" v-model="props.modelValue" />
  </label>
</template>

<style scoped>
.field {
  display: grid;
  gap: 8px;
}
</style>
