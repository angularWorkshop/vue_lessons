export let mode = 'success';

export function setMode(nextMode) {
  mode = nextMode;
}

export async function fetchLessons() {
  if (mode === 'error') {
    throw new Error('network');
  }
  if (mode === 'empty') {
    return [];
  }
  return [
    { id: 'l1', title: 'Vue Intro' },
    { id: 'l2', title: 'Router Lab' },
  ];
}
