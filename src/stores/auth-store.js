import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({ profile: null }),
  getters: {
    isLoggedIn: state => Boolean(state.profile),
  },
  actions: {
    loginAs(name) {
      this.profile = { name };
    },
  },
});
