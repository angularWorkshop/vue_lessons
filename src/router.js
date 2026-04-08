import { createMemoryHistory, createRouter } from 'vue-router';
import FiltersView from './FiltersView.vue';

export const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      component: FiltersView,
    },
  ],
});
