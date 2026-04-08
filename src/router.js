import { createMemoryHistory, createRouter } from 'vue-router';
import WorkspaceLayout from './WorkspaceLayout.vue';
import QueueView from './QueueView.vue';
import EditorView from './EditorView.vue';

export const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      component: WorkspaceLayout,
      children: [
        { path: '', component: QueueView },
        { path: 'editor/:id', component: EditorView },
      ],
    },
  ],
});
