import { defineStore } from 'pinia';
export const usePermissionsStore = defineStore('permissions', { state: () => ({ summary: 'read only' }), actions: { syncRole(role) { this.summary = role === 'editor' ? 'can edit' : 'read only'; } } });
