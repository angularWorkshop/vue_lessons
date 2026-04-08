<script setup>
import { reactive } from 'vue';
import { dropdownSeed } from './dropdown-seed.js';

const dropdown = reactive({
  ...dropdownSeed,
});

function openDropdown() {
  dropdown.isOpen = true;
  dropdown.status = 'open';
}

function closeDropdown() {
  dropdown.isOpen = false;
  dropdown.status = 'closed';
}

function selectCurrent() {
  dropdown.selectedLabel = 'Vue Fundamentals';
  dropdown.status = 'selected';
}

function applySelection() {
  dropdown.status = 'submitted';
}
</script>

<template>
  <section class="dropdown-shell" @click="closeDropdown">
    <h1>{{ dropdown.title }}</h1>
    <form @submit.prevent="applySelection">
      <input v-model="dropdown.query" @keyup.enter="openDropdown" />
      <div v-if="dropdown.isOpen" class="dropdown">
        <p>������: {{ dropdown.status }}</p>
        <p>�����: {{ dropdown.selectedLabel }}</p>
        <button type="button" @click.stop="selectCurrent">�������</button>
      </div>
    </form>
  </section>
</template>

<style scoped>
.dropdown-shell {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  gap: 12px;
  align-content: center;
  background: linear-gradient(180deg, #fdf2f8 0%, #ffffff 100%);
  color: #831843;
  font-family: Arial, sans-serif;
}

.dropdown {
  display: grid;
  gap: 12px;
  padding: 16px;
  border: 1px solid #f9a8d4;
  border-radius: 16px;
}

button {
  width: fit-content;
  border: 0;
  border-radius: 999px;
  padding: 12px 16px;
  background: #db2777;
  color: white;
  font-weight: 700;
}
</style>
