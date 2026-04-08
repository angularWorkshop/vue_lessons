<script setup>
import OfferCard from './components/OfferCard.vue';
import { offerSeed } from './offer-seed.js';

const offer = offerSeed;
</script>

<template>
  <main class="workspace">
    <OfferCard :offer="offer" />
  </main>
</template>

<style scoped>
.workspace {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  place-items: center;
  background: linear-gradient(180deg, #ede9fe 0%, #ffffff 100%);
  color: #312e81;
  font-family: Arial, sans-serif;
}
</style>
