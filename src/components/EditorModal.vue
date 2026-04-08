<script setup>
import { reactive } from 'vue';

const props = defineProps({
  product: Object,
});

const emit = defineEmits(['save', 'close']);

const draft = reactive({
  title: props.product.title,
  price: props.product.price,
});

function saveDraft() {
  emit('save', {
    ...props.product,
    title: draft.title,
    price: Number(draft.price),
  });
}
</script>

<template>
  <section class="modal" v-if="props.product">
    <label>
      Title
      <input type="text" v-model="draft.title" />
    </label>
    <label>
      Price
      <input type="number" v-model="draft.price" />
    </label>
    <div class="actions">
      <button type="button" @click="saveDraft">Save</button>
      <button type="button" @click="emit('close')">Close</button>
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
