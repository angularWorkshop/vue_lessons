<script setup>
const props = defineProps({
  product: Object,
});

const emit = defineEmits(['save', 'close']);
</script>

<template>
  <section class="modal" v-if="props.product">
    <label>
      Title
      <input type="text" v-model="props.product.title" />
    </label>
    <label>
      Price
      <input type="number" v-model="props.product.price" />
    </label>
    <div class="actions">
      <button type="button" @click="emit('close')">Close</button>
      <button type="button" @click="emit('save', props.product)">Save</button>
    </div>
  </section>
</template>

<style scoped>
.modal {
  padding: 16px;
  border-radius: 18px;
  background: rgba(15, 23, 42, 0.08);
  display: grid;
  gap: 12px;
}

.actions {
  display: flex;
  gap: 8px;
}
</style>
