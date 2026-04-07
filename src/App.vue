<script setup>
import { studentProfile } from './student-profile.js';
</script>

<template>
  <article class="profile-card">
    <p class="profile-card__eyebrow">TODO label</p>
    <h1>TODO name</h1>
    <p class="profile-card__role">TODO role</p>
    <p>TODO track</p>
    <p>TODO goal</p>
    <p>TODO skills</p>
    <button type="button">TODO action</button>
  </article>
</template>

<style scoped>
.profile-card {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  gap: 12px;
  align-content: center;
  background: linear-gradient(180deg, #fef3c7 0%, #ffffff 100%);
  color: #78350f;
  font-family: Arial, sans-serif;
}

.profile-card__eyebrow {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #d97706;
}

.profile-card__role {
  font-weight: 700;
}

h1 {
  margin: 0;
  font-size: 40px;
  line-height: 1.1;
}

p {
  margin: 0;
  max-width: 720px;
  font-size: 18px;
}

button {
  width: fit-content;
  margin-top: 8px;
  padding: 12px 18px;
  border: 0;
  border-radius: 999px;
  background: #d97706;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
}
</style>
