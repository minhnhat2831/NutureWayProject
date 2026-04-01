import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type User = {
    fullName: string
    id: string
    firstName: string
    middleName: string
    lastName: string
    birthDate: string
    email: string
    phoneNumber: number
    googleId: string
    appleId: string
    status: string
    verifiedEmail: boolean
    countryCode: string
    verifiedPhoneNumber: boolean
    deActiveAt: string
    isExternal: string
    createdAt: string
    updatedAt: string
    doula?: {
        id: string
        title: string
        description: string
        businessName: string
        starAvg: number
        status: string
        qualifications: string
        stripeCustomerId: string
        createdAt: string
        updatedAt: string
        deletedAt: string
    }
    picture? : any
}

type AuthState = {
    user: User | null
    role: string | null
    accessToken: string | null
    refreshToken: string | null
}

type AuthContextType = AuthState & {
    setAuth: (data: AuthState) => void
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [auth, setAuthState] = useState<AuthState>({
        user: null,
        role: null,
        accessToken: null,
        refreshToken: null
    })

    const setAuth = (data: AuthState) => {
        setAuthState(data)

        localStorage.setItem("auth", JSON.stringify(data))
    }

    useEffect(() => {
        const stored = localStorage.getItem("auth")
        if (stored) {
            setAuthState(JSON.parse(stored))
        }
    }, [])

    const logout = () => {
        setAuthState({
            user: null,
            role: null,
            accessToken: null,
            refreshToken: null
        })
        localStorage.removeItem("auth")
    }

    return (
        <AuthContext.Provider value={{ ...auth, setAuth, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthen = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error("useAuth must be used within AuthProvider")
    return context
}