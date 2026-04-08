import { defineStore } from 'pinia';
import { useAuthStore } from './auth-store.js';
export const usePermissionsStore = defineStore('permissions', { state: () => ({ summary: 'read only' }), actions: { syncRole() { const auth = useAuthStore(); this.summary = auth.role === 'editor' ? 'can edit' : 'read only'; } } });
