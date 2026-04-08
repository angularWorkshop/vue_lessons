import { defineStore } from 'pinia';
export const useFiltersStore = defineStore('filters', { state: () => ({ level: 'all' }), actions: { setLevel(level) { this.level = level; } } });
