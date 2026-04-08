import { computed, ref } from 'vue';

export function useDirectoryFilter(items) {
  const query = ref('');

  const visibleItems = computed(() => items);

  function updateQuery(value) {
    query.value = value;
  }

  return {
    query,
    visibleItems,
    updateQuery,
  };
}
