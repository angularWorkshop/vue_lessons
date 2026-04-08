import { defineStore } from 'pinia';
export const usePreferencesStore = defineStore('preferences', { state: () => ({ theme: 'light', density: 'comfortable' }), getters: { previewClass: state => [state.theme, state.density].join(' ') }, actions: { toggleTheme() { this.theme = this.theme === 'light' ? 'dark' : 'light'; this.density = this.theme === 'light' ? 'comfortable' : 'compact'; } } });
