export function createRuntimeConfig(env) { return { apiBaseUrl: env.VITE_API_URL, appName: env.VITE_APP_NAME ?? 'Vue Platform' }; }
export function buildClientLog(config) { return JSON.stringify({ apiBaseUrl: config.apiBaseUrl, appName: config.appName }); }
