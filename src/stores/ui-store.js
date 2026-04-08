import { defineStore } from 'pinia';
export const useUiStore = defineStore('ui', { state: () => ({ theme: 'light' }), actions: { hydrate() {}, toggle() { this.theme = this.theme === 'light' ? 'dark' : 'light'; } } });
