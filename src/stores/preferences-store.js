import { defineStore } from 'pinia';
export const usePreferencesStore = defineStore('preferences', { state: () => ({ theme: 'light', density: 'comfortable' }), actions: { toggleTheme() { this.theme = this.theme === 'light' ? 'dark' : 'light'; } } });
