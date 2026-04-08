import { computed, ref } from 'vue';

export function useCatalogSearch(items) {
  const query = ref('');
  const page = ref(1);
  const pageSize = 2;

  const filteredItems = computed(() => items);
  const pageCount = computed(() => 1);
  const visibleItems = computed(() => filteredItems.value);

  function setQuery(value) {
    query.value = value;
  }

  function nextPage() {
    page.value += 1;
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
