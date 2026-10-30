type Config = {
    "authorization-header": "Authorization" | "Bearer",
    "session-header": string,
    "refresh-method": "cookie" | "session",
    "baseUrl": string | undefined,
}

export let config: Config = {
    "authorization-header": "Authorization",
    "session-header": "x-session-id",
    "refresh-method": "cookie",
    "baseUrl": undefined,
};

export const fetchOptions: RequestInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
};

export function configure(configOptions: { baseUrl: string } & Partial<Config>) {
    if (!configOptions.baseUrl) throw new Error("hallpass.configure requires baseUrl");
    config = { ...config, ...configOptions };
}