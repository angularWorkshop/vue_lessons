<script setup>
import { reactive } from 'vue';
import { reorderBoardSeed } from './reorder-board-seed.js';

const board = reactive({
  ...reorderBoardSeed,
});

function moveLastToFirst() {
  const nextTasks = [...board.tasks];
  const lastTask = nextTasks.pop();
  nextTasks.unshift(lastTask);
  board.tasks = nextTasks;
}
</script>

<template>
  <section class="reorder-board">
    <h1>Priority Board</h1>
    <button type="button" @click="moveLastToFirst">Move last to first</button>
    <ol>
      <li v-for="task in board.tasks" :key="task.id">{{ task.title }}</li>
    </ol>
  </section>
</template>

<style scoped>
.reorder-board {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  gap: 12px;
  align-content: start;
  background: linear-gradient(180deg, #fee2e2 0%, #ffffff 100%);
  color: #7f1d1d;
  font-family: Arial, sans-serif;
}

button {
  justify-self: start;
  border: 0;
  border-radius: 999px;
  padding: 10px 14px;
  background: #dc2626;
  color: white;
  font-weight: 700;
}
</style>
