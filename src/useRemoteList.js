import { reactive } from 'vue';
import { fetchLessons } from './api.js';

export function useRemoteList() {
  const state = reactive({
    isLoading: false,
    error: null,
    items: [],
  });

  async function load() {
    state.isLoading = true;
    state.error = null;
    try {
      state.items = await fetchLessons();
    } catch (error) {
      state.error = error.message;
      state.items = [];
    } finally {
      state.isLoading = false;
    }
  }

  return {
    state,
    load,
  };
}
