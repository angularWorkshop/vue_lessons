import { createMemoryHistory, createRouter } from 'vue-router';
import LayoutView from './LayoutView.vue';
import ChildOne from './ChildOne.vue';
import ChildTwo from './ChildTwo.vue';

export const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/dashboard',
      component: LayoutView,
      children: [
        { path: '', component: ChildOne },
        { path: 'settings', component: ChildTwo },
      ],
    },
  ],
});
