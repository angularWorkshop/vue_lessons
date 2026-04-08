export let mode = 'success';

export function setMode(nextMode) {
  mode = nextMode;
}

export async function fetchOperations(query) {
  if (mode === 'error') throw new Error('network');
  if (mode === 'empty') return [];
  return [{ id: 'op-1', title: 'Review ' + (query || 'queue') }];
}
