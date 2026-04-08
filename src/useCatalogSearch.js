import { computed, ref } from 'vue';

export function useCatalogSearch(items) {
  const query = ref('');
  const page = ref(1);
  const pageSize = 2;

  const filteredItems = computed(() => {
    const normalized = query.value.trim().toLowerCase();
    if (!normalized) return items;
    return items.filter(item => item.title.toLowerCase().includes(normalized));
  });

  const pageCount = computed(() => Math.max(1, Math.ceil(filteredItems.value.length / pageSize)));
  const visibleItems = computed(() => {
    const start = (page.value - 1) * pageSize;
    return filteredItems.value.slice(start, start + pageSize);
  });

  function setQuery(value) {
    query.value = value;
    page.value = 1;
  }

  function nextPage() {
    page.value = Math.min(pageCount.value, page.value + 1);
  }

  function previousPage() {
    page.value = Math.max(1, page.value - 1);
  }

  return {
    query,
    page,
    pageCount,
    visibleItems,
    setQuery,
    nextPage,
    previousPage,
  };
}
