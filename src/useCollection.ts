export type RemoteStatus = 'idle' | 'loading' | 'success' | 'error';
export function useCollection<T>(initialItems: T[]) { return { items: initialItems as T[], status: 'success' as RemoteStatus, error: null as string | null }; }
