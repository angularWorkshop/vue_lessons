export function readTheme(targetWindow) { return targetWindow.localStorage.getItem('theme') ?? 'light'; }
