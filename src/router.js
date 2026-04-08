import { createMemoryHistory, createRouter } from 'vue-router';
import LayoutView from './LayoutView.vue';
import ChildOne from './ChildOne.vue';
import ChildTwo from './ChildTwo.vue';

export const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/reports', component: LayoutView },
    { path: '/reports/summary', component: ChildOne },
    { path: '/reports/detail', component: ChildTwo },
  ],
});
