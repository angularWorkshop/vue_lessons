export function createRuntimeConfig(env) { return { apiBaseUrl: env.VITE_API_URL, secret: env.VITE_SECRET }; }
export function buildClientLog(config) { return JSON.stringify(config); }
