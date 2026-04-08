import { defineStore } from 'pinia';
export const useUiStore = defineStore('ui', { state: () => ({ theme: 'light' }), actions: { hydrate() { const saved = localStorage.getItem('ui-theme'); if (saved) this.theme = saved; }, toggle() { this.theme = this.theme === 'light' ? 'dark' : 'light'; localStorage.setItem('ui-theme', this.theme); } } });
