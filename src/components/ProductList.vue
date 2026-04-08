<script setup>
// TODO: accept products through props and render both cards.
</script>

<template>
  <section class="list">
    <article class="card">
      <h2>TODO product</h2>
      <p>TODO price</p>
    </article>
  </section>
</template>

<style scoped>
.list {
  display: grid;
  gap: 12px;
}

.card {
  padding: 16px;
  border-radius: 18px;
  background: white;
}
</style>
