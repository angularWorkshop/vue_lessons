<script setup>
import { reactive } from 'vue';
import { modalSeed } from './modal-seed.js';

const modal = reactive({
  ...modalSeed,
});

function openModal() {
  modal.isOpen = true;
}

function closeModal() {
  modal.isOpen = false;
}

function toggleContent() {
  modal.hasContent = !modal.hasContent;
}
</script>

<template>
  <section class="workspace">
    <h1>Modal Review</h1>
    <div class="toolbar">
      <button type="button" @click="openModal">Open</button>
      <button type="button" @click="closeModal">Close</button>
      <button type="button" @click="toggleContent">Toggle content</button>
    </div>

    <section class="modal-frame" v-if="modal.isOpen">
      <article class="modal-card">
        <h2>{{ modal.title }}</h2>
        <p>{{ modal.description }}</p>
      </article>
    </section>
  </section>
</template>

<style scoped>
.workspace {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  gap: 16px;
  align-content: start;
  background: linear-gradient(180deg, #f5f3ff 0%, #ffffff 100%);
  color: #312e81;
  font-family: Arial, sans-serif;
}

.toolbar {
  display: flex;
  gap: 8px;
}

button {
  border: 0;
  border-radius: 999px;
  padding: 10px 14px;
  background: #7c3aed;
  color: white;
  font-weight: 700;
}

.modal-frame {
  padding: 16px;
  border-radius: 16px;
  background: rgba(124, 58, 237, 0.12);
}

.modal-card {
  padding: 16px;
  border-radius: 12px;
  background: white;
}
</style>
