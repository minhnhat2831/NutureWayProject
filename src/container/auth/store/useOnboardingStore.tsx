import { create } from 'zustand'

interface VerifyData {
    action: string
    token: string
}

type SelectIdentity = 'client' | 'doula' | ''

interface OnboardingState {
    email: string
    verifyData: VerifyData | null
    select : SelectIdentity

    setSelect : (select : SelectIdentity) => void
    setEmail: (email: string) => void
    setVerifyData: (data: VerifyData) => void
    reset: () => void
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
    email: '',
    verifyData: null,
    select : '',

    setSelect: (select) => set({select}),
    setEmail: (email) => set({ email }),
    setVerifyData: (data) => set({ verifyData: data }),
    reset: () => set({ email: '', verifyData: null }),
}))