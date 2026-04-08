<script setup>
import { formatOfferView } from '../offer-policy.js';

const props = defineProps({
  offer: Object,
});

const offerView = formatOfferView(props.offer);
</script>

<template>
  <article class="offer-card" :data-tone="offerView.tone">
    <p>{{ offerView.badgeText }}</p>
    <h2>{{ offer.title }}</h2>
    <p>{{ offerView.priceText }}</p>
  </article>
</template>

<style scoped>
.offer-card {
  padding: 18px;
  border-radius: 18px;
  background: white;
}
</style>
