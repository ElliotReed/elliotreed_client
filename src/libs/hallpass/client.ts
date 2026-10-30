import axios from "axios";

import { config } from "./config/auth.config";
import { attachAuth } from "./attachAuth";

import type { AxiosInstance } from "axios";

// This get method is required to get a "fresh" copy of config
let clientInstance: AxiosInstance | null = null;

export function getClient(): AxiosInstance {
    if (!clientInstance) {
        clientInstance = axios.create({
            baseURL: config.baseUrl,
            withCredentials: true,
        });
        attachAuth(clientInstance);
    }
    return clientInstance;
}