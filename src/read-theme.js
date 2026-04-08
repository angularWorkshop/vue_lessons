export function readTheme(targetWindow = typeof window !== 'undefined' ? window : null) { return targetWindow?.localStorage?.getItem('theme') ?? 'light'; }
