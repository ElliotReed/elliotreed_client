import { getClient } from "./client";
import {
    CreateAccountForm,
    ResetPasswordForm,
    SignInForm,
} from "./components/auth.forms";
import { SignOutButton } from "./components/sign-out-button"
import { config, configure } from "./config/auth.config";
import { useAuthStore } from "./store/auth.store";

import { useAuth } from "./hooks/use-auth";

import type { User } from "./store/auth.store";
import { restoreSession } from "./services/token.service";

export function setToken(token: string) {
    useAuthStore.getState().setToken(token);
}

export function setUser(user: User) {
    useAuthStore.getState().setUser(user);
}

export function getAccessToken() {
    return useAuthStore.getState().accessToken;
}

export function getSessionId() {
    return useAuthStore.getState().user?.sessionId;
}

export function getUser() {
    return useAuthStore.getState().user;
}

export function clearAuth() {
    useAuthStore.getState().clearAuth();
}

export function getIsAuthenticated() {
    return useAuthStore.getState().isAuthenticated();
}

export const hallpass = {
    auth: {
        getIsAuthenticated,
        restoreSession,
    },
    config,
    configure: configure,
    get client() {
        return getClient();
    },
    hooks: { useAuth },
    forms: {
        CreateAccountForm,
        ResetPasswordForm,
        SignInForm,
    },
    SignOutButton,
}