<script setup>
import { profileFormSeed } from './profile-form-seed.js';

const name = profileFormSeed.name;
const email = profileFormSeed.email;
const track = profileFormSeed.track;
const agreementAccepted = profileFormSeed.agreementAccepted;
const status = profileFormSeed.status;
const submitLabel = profileFormSeed.submitLabel;

// TODO: replace scattered values with one reactive profileForm object.
</script>

<template>
  <section class="profile-form">
    <p class="eyebrow">TODO profile</p>
    <h1>TODO name</h1>
    <p>TODO email</p>
    <p>TODO track</p>
    <p>TODO status</p>
    <p>TODO agreement</p>
    <button type="button">TODO action</button>
  </section>
</template>

<style scoped>
.profile-form {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  gap: 12px;
  align-content: center;
  background: linear-gradient(180deg, #eff6ff 0%, #ffffff 100%);
  color: #1e3a8a;
  font-family: Arial, sans-serif;
  border: 1px solid #bfdbfe;
}

.eyebrow {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #2563eb;
}

h1 {
  margin: 0;
  font-size: 38px;
  line-height: 1.1;
}

p, button {
  margin: 0;
  font-size: 18px;
}

button {
  width: fit-content;
  padding: 12px 18px;
  border: 0;
  border-radius: 999px;
  background: #2563eb;
  color: #fff;
  font-weight: 700;
}
</style>
