// src/store/useAuthStore.ts
import { create } from "zustand";

type Role = "user" | "admin";

interface UserInfo {
    firstName: string;
    lastName: string;
}

interface AuthState {
    token: string | null;
    role: Role | null;
    isAuth: boolean;
    userInfo: UserInfo | null;
    login: (token: string, userInfo: UserInfo, role?: Role) => void;
    logout: () => void;
    setToken: (token: string | null) => void;
    setUserInfo: (userInfo: UserInfo) => void;
    updateUserInfo: (updates: Partial<UserInfo>) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    token: localStorage.getItem("token"),
    role: (localStorage.getItem("role") as Role) || null,
    isAuth: Boolean(localStorage.getItem("token")),
    userInfo: localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo")!)
        : null,

    login: (token, userInfo, role = "user") => {
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        set({ token, role, userInfo, isAuth: true });
    },

    logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("userInfo");
        set({ token: null, role: null, userInfo: null, isAuth: false });
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

    setUserInfo: (userInfo) => {
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        set({ userInfo });
    },

    updateUserInfo: (updates) => {
        set((state) => {
            if (!state.userInfo) return state;

            const updatedUserInfo = { ...state.userInfo, ...updates };
            localStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));
            return { userInfo: updatedUserInfo };
        });
    },
}));
