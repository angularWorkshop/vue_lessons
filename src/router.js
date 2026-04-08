import { createMemoryHistory, createRouter } from 'vue-router';
import LoginView from './LoginView.vue';
import AdminView from './AdminView.vue';
import { authState } from './auth.js';

export const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/login', component: LoginView },
    { path: '/admin', component: AdminView, meta: { requiresAuth: true } },
  ],
});

router.beforeEach(to => {
  if (to.meta.requiresAuth && !authState.isLoggedIn) {
    return {
      path: '/login',
      query: { redirect: to.fullPath },
    };
  }
  return true;
});
