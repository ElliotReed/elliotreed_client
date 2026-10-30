import { create } from "zustand";

import { config } from "../config/auth.config";

export type User = {
    email: string;
    username?: string;
    createdAt: Date;
    sessionId: string;
}

export type AuthStore = {
    accessToken: string | null;
    user: User | null;

    setToken: (accessToken: string) => void;
    setUser: (user: User) => void;
    clearAuth: () => void;
    isAuthenticated: () => boolean;
    persistSession: () => void;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
    accessToken: null,
    user: null,

    setToken: (accessToken,) =>
        set({ accessToken }),

    setUser: (user) => {
        set({
            user: {
                ...user, createdAt: new Date(user.createdAt),
            }
        });
        get().persistSession();
    },

    clearAuth: () => {
        localStorage.removeItem("sessionId");
        set({ accessToken: null, user: null });
    },

    isAuthenticated: () =>
        !!get().accessToken,

    persistSession: () => {
        const shouldPersist = config["refresh-method"] === "session";
        const sessionId = get().user?.sessionId;

        if (shouldPersist && sessionId) {
            localStorage.setItem("sessionId", sessionId);
        }
    },
}));


