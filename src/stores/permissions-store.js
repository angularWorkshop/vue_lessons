import { defineStore } from 'pinia';
export const usePermissionsStore = defineStore('permissions', { state: () => ({ canEdit: false }), actions: { grantEdit() { this.canEdit = true; } } });
