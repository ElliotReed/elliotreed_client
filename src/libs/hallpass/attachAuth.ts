import type { AxiosInstance } from "axios";

import { isTokenExpired, refreshAccessToken } from "./services/token.service";
import { config } from "./config/auth.config";
import { clearAuth, getAccessToken, getSessionId } from ".";


export function attachAuth(instance: AxiosInstance) {
    const sessionHeaderName = config["session-header"];
    instance.interceptors.request.use(async (config) => {
        let accessToken = getAccessToken();

        if (!accessToken || isTokenExpired(accessToken)) {
            try {
                accessToken = await refreshAccessToken();
            } catch {
                // no valid session — let it go out and 401 naturally
            }
        }
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        const sessionId = getSessionId();

        if (sessionId) {
            config.headers[sessionHeaderName] = sessionId;
        }

        return config;
    });

    instance.interceptors.response.use((res) => {
        return res;
    },
        async (error) => {
            const originalRequest = error.config;

            // bail immediately if the refresh call itself failed
            const isRefreshCall = originalRequest.url?.includes("/auth/refresh");
            if (isRefreshCall) {
                clearAuth();
                return Promise.reject(error);
            }

            if (error.response?.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;

                try {
                    const accessToken = await refreshAccessToken();
                    originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
                    return instance(originalRequest);
                } catch (refreshError) {
                    console.error("Refresh token request failed", refreshError);
                    clearAuth();
                    return Promise.reject(refreshError);
                }
            }
            return Promise.reject(error);
        }
    )
}