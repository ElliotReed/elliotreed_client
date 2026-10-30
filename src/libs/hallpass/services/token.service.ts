import { getIsAuthenticated, setToken, setUser } from "..";
import { config } from "../config/auth.config";

function extractAccessToken(response: Response): string {
    const authHeader = response.headers.get('authorization');
    const accessToken = authHeader?.replace('Bearer ', '');
    if (!accessToken) throw new Error('No access token in refresh response');
    return accessToken;
}

export function isTokenExpired(token: string): boolean {
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const expiresAt = payload.exp * 1000;
        return Date.now() > expiresAt - 10_000; // treat as expired 10s early
    } catch {
        return true; // if we can't parse it, treat as expired
    }
}

let refreshPromise: Promise<string> | null = null;

export async function refreshAccessToken() {
    if (!refreshPromise) {
        refreshPromise = fetch(`${config.baseUrl}/auth/refresh`, {
            method: 'POST',
            credentials: 'include',
        })
            .then((response) => {
                const accessToken = extractAccessToken(response);
                setToken(accessToken);
                return accessToken;
            })
            .finally(() => {
                refreshPromise = null;
            });
    }
    return refreshPromise;
}

export async function refreshSession() {
    const response = await fetch(`${config.baseUrl}/auth/refresh?user=true`, {
        method: 'POST',
        credentials: 'include',
    });
    const accessToken = extractAccessToken(response);
    const result = await response.json();
    return { accessToken, user: result.data };
}

export async function restoreSession() {
    const isAuthenticated = getIsAuthenticated();
    if (!isAuthenticated) {
        try {
            const { accessToken, user } = await refreshSession();
            setToken(accessToken);
            setUser(user);
        } catch {
            // no valid session — that's fine, proceed as signed out
        }
    }
    return getIsAuthenticated();
}