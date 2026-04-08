export type RemoteResource<T> = { status: 'loading'; data: null; error: null } | { status: 'success'; data: T; error: null } | { status: 'error'; data: null; error: string };
export function createRemoteResource<T>(data: T): RemoteResource<T> { return { status: 'success', data, error: null }; }
