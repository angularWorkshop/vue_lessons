import { createMemoryHistory, createRouter } from 'vue-router';
import OperationsView from './OperationsView.vue';

export const router = createRouter({
  history: createMemoryHistory(),
  routes: [{ path: '/', component: OperationsView }],
});
