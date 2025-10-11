import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface PhoneState {
    phone: string | null
    setPhone: (phone: string) => void
    clearPhone: () => void
}

export const usePhoneStore = create<PhoneState>()(
    persist(
        (set) => ({
            phone: null,
            setPhone: (phone) => set({ phone }),
            clearPhone: () => set({ phone: null }),
        }),
        {
            name: 'phone-storage', // key in localStorage
        }
    )
)
