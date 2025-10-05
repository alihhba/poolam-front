// src/store/useAuthStore.ts
import { create } from "zustand";

type Role = "user" | "admin";

interface AuthState {
    token: string | null;
    role: Role | null;
    isAuth: boolean;
    login: (token: string, role?: Role) => void;
    logout: () => void;
    setToken: (token: string | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    token: localStorage.getItem("token"),
    role: (localStorage.getItem("role") as Role) || null,
    isAuth: Boolean(localStorage.getItem("token")),

    login: (token, role = "user") => {
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        set({ token, role, isAuth: true });
    },

    logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        set({ token: null, role: null, isAuth: false });
    },

    setToken: (token) => {
        if (token) {
            localStorage.setItem("token", token);
            set({ token, isAuth: true });
        } else {
            localStorage.removeItem("token");
            set({ token: null, isAuth: false });
        }
    },
}));
