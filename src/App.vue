<script setup>
import { reactive } from 'vue';
import { commentsBoardSeed } from './comments-board-seed.js';

const board = reactive({
  ...commentsBoardSeed,
});

function toggleFilter() {
  board.showAll = !board.showAll;
}

function visibleComments() {
  return board.showAll
    ? board.comments
    : board.comments.filter(comment => comment.status === 'published');
}
</script>

<template>
  <section class="comments-board">
    <h1>Comments</h1>
    <button type="button" @click="toggleFilter">{{ board.showAll ? 'Показать опубликованные' : 'Показать все' }}</button>
    <p>Фильтр: {{ board.showAll ? 'all' : 'published' }}</p>
    <ul>
      <li>{{ board.comments[0].author }} — {{ board.comments[0].text }}</li>
    </ul>
  </section>
</template>

<style scoped>
.comments-board {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  gap: 12px;
  align-content: start;
  background: linear-gradient(180deg, #ecfccb 0%, #ffffff 100%);
  color: #365314;
  font-family: Arial, sans-serif;
}

button {
  justify-self: start;
  border: 0;
  border-radius: 999px;
  padding: 10px 14px;
  background: #65a30d;
  color: white;
  font-weight: 700;
}
</style>
