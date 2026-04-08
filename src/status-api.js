export let shouldFail = false;
export function setShouldFail(value) { shouldFail = value; }
export async function saveStatus() { if (shouldFail) throw new Error('save failed'); return true; }
