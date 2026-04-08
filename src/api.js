export const searchCalls = [];

export function resetSearchCalls() {
  searchCalls.length = 0;
}

export async function searchLessons(query) {
  searchCalls.push(query);
  return [{ id: 'r1', title: 'Result for ' + query }];
}
