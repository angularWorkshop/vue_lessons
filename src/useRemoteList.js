import { reactive } from 'vue';
import { fetchLessons } from './api.js';

export function useRemoteList() {
  const state = reactive({
    isLoading: false,
    error: null,
    items: [],
  });

  async function load() {
    state.items = await fetchLessons();
  }

  return {
    state,
    load,
  };
}
