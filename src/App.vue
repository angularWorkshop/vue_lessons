<script setup>
import { reactive } from 'vue';
import { registrationSeed } from './registration-seed.js';

const form = reactive({
  ...registrationSeed,
  fields: {
    ...registrationSeed.fields,
  },
});

function submitForm() {
  form.submitStatus = 'submitted';
  form.resultMessage = '����������� ���������';
}
</script>

<template>
  <form class="registration-form" @submit.prevent="submitForm">
    <h1>Registration Flow</h1>
    <label>
      Name
      <input v-model="form.fields.name" type="text" />
    </label>
    <label>
      Email
      <input v-model="form.fields.email" type="email" />
    </label>
    <label>
      <input v-model="form.agreementAccepted" type="checkbox" />
      Agreement accepted
    </label>
    <p>���: {{ form.fields.name }}</p>
    <p>Email: {{ form.fields.email }}</p>
    <p>��������: {{ form.agreementAccepted ? '��' : '���' }}</p>
    <p>������: {{ form.submitStatus }}</p>
    <p>{{ form.resultMessage }}</p>
    <button type="submit">���������</button>
  </form>
</template>

<style scoped>
.registration-form {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  gap: 12px;
  align-content: center;
  background: linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%);
  color: #14532d;
  font-family: Arial, sans-serif;
}

label {
  display: grid;
  gap: 6px;
}

button {
  width: fit-content;
  border: 0;
  border-radius: 999px;
  padding: 12px 16px;
  background: #16a34a;
  color: white;
  font-weight: 700;
}
</style>
