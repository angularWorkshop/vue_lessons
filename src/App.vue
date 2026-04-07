<script setup>
import { statusCardSeed } from './status-card-seed.js';

const card = {
  ...statusCardSeed,
};

// TODO: make the card reactive and connect class/attribute bindings.
</script>

<template>
  <section class="status-card">
    <p class="eyebrow">TODO label</p>
    <h1>TODO title</h1>
    <p>TODO status</p>
  </section>
</template>

<style scoped>
.status-card {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  gap: 12px;
  align-content: center;
  background: #fff7ed;
  color: #7c2d12;
  border: 1px solid #fdba74;
  font-family: Arial, sans-serif;
}

.status-card--warning {
  box-shadow: inset 0 0 0 2px #f97316;
}

.status-card--pinned {
  border-left: 8px solid #ea580c;
}

.status-card--compact {
  max-width: 520px;
}

.eyebrow {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #ea580c;
}

h1, p {
  margin: 0;
}

h1 {
  font-size: 38px;
  line-height: 1.1;
}

p {
  font-size: 18px;
}
</style>
