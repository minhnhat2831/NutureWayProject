import { create } from 'zustand'
import type { registerDetail } from '../schema/AuthSchema.type'

interface OtpData {
    email: string
    phoneNumber: number
    otp: number
    expireTime: string
}

interface VerifyData {
    action: string
    token: string
}

interface OnboardingState {
    // Stage 1 - LandingPage
    email: string

    // Stage 2 - SendOtp 
    otpData: OtpData | null

    // Stage 3 - Verify 
    verifyData: VerifyData | null

    // Stage 4 - password
    password : string

    // Stage 5 - register data
    registerData : registerDetail | null

    setEmail: (email: string) => void
    setOtpData: (data: OtpData) => void
    setVerifyData: (data: VerifyData) => void
    setPassword : (password : string) => void
    setRegisterData: (data: registerDetail) => void
    reset: () => void
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
    email: '',
    otpData: null,
    verifyData: null,
    password : '',
    registerData : null,

    setEmail: (email) => set({ email }),
    setPassword: (password) => set({ password}),
    setOtpData: (data) => set({ otpData: data }),
    setVerifyData: (data) => set({ verifyData: data }),
    setRegisterData: (data) => set({ registerData : data}),
    reset: () => set({ email: '', otpData: null, verifyData: null }),
}))