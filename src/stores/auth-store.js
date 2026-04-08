import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({ profile: null }),
  getters: {
    isLoggedIn: () => false,
  },
  actions: {
    loginAs(name) {
      this.profile = { name };
    },
  },
});
