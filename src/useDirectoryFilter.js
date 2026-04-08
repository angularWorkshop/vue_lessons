import { computed, ref } from 'vue';

export function useDirectoryFilter(items) {
  const query = ref('');

  const visibleItems = computed(() => {
    const normalized = query.value.trim().toLowerCase();
    if (!normalized) return items;
    return items.filter(item => item.title.toLowerCase().includes(normalized));
  });

  function updateQuery(value) {
    query.value = value;
  }

  return {
    query,
    visibleItems,
    updateQuery,
  };
}
