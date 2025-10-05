// src/store/useFormStore.ts
import {create} from "zustand";

interface FormState {
    values: Record<string, never>;
    setValues: (values: Record<string, never>) => void;
    resetValues: () => void;
}

export const useFormStore = create<FormState>((set) => ({
    values: {},
    setValues: (values) => set({values}),
    resetValues: () => set({values: {}}),
}));
