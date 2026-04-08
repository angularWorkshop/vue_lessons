<script setup>
const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(['update:modelValue']);

function updateValue(event) {
  emit('update:modelValue', event.target.value);
}
</script>

<template>
  <label class="search-box">
    Search
    <input type="text" :value="props.modelValue" @input="updateValue" />
  </label>
</template>

<style scoped>
.search-box {
  display: grid;
  gap: 8px;
}
</style>
