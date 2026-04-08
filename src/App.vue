<script setup>
import OfferCard from './components/OfferCard.vue';
import { offerSeed } from './offer-seed.js';
import { formatOfferView } from './offer-policy.js';

const offer = offerSeed;
const offerView = formatOfferView(offer);
</script>

<template>
  <main class="workspace">
    <OfferCard
      :title="offer.title"
      :badge-text="offerView.badgeText"
      :price-text="offerView.priceText"
      :tone="offerView.tone"
    />
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
