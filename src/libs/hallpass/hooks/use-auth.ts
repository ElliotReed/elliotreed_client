// hooks/use-auth.ts
import { useAuthStore } from "../store/auth.store";

export function useAuth() {
    const isAuthenticated = useAuthStore(state => state.isAuthenticated());
    const user = useAuthStore(state => state.user);
    const token = useAuthStore(state => state.accessToken);
    const clearAuth = useAuthStore(state => state.clearAuth);
    const setToken = useAuthStore(state => state.setToken);
    const setUser = useAuthStore(state => state.setUser);

    return {
        isAuthenticated,
        user,
        token,
        clearAuth,
        setToken,
        setUser,
    };
}

export function getAuth() {
    return useAuthStore.getState();
}