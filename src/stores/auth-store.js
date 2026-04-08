import { defineStore } from 'pinia';
export const useAuthStore = defineStore('auth', { state: () => ({ role: 'viewer' }), actions: { promote() { this.role = 'editor'; } } });
