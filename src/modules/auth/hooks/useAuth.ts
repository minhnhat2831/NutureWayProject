import { useForm } from "react-hook-form"
import { type addressResponse, type checkEmailRequest, type checkPassword, type loginRequest, type registerClientRequest, type registerDetail, type resetPasswordRequest } from "../schema/AuthSchema.type"
import { useMutation, useQuery } from "@tanstack/react-query"
import { getAddress, postCheckResetPassword, postForgotPassword, postLogin, postResetPassword, postSendOtp, postVerifyOtp } from "../service/Api"
import { toast } from "react-toastify"
import { useOnboardingStore } from "../store/useOnboardingStore"
import { useLocation, useNavigate } from "react-router"
import { checkEmailRequestSchema, checkPasswordSchema, loginRequestSchema, registerDetailSchema } from "../schema/AuthSchema"
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react"
import { handleError } from "@/utils/ErrorHandle"
import useCheckEmailFormData from "./useCheckEmailFormData"
import useFormData from "./useFormData"
import { useAuthen } from "@/context/AuthContext"

export default function useAuth() {
    const nav = useNavigate()
    const {
        email,
        verifyData,
        setOtpData,
        setEmail,
        setPassword,
        setRegisterData,
        registerData,
        password } = useOnboardingStore()

    const { method, checkEmail, isLoading } = useCheckEmailFormData()

    const useCheckEmail = () => {
        const onSubmit = async () => {
            const email = method.getValues("email")

            const result = await checkEmail(email)

            if (result?.data === true) {
                nav('/login')
            } else if (result?.data === false) {
                nav('/send-otp', { state: { from: "register" } })
            }
        }

        return {
            method,
            isLoading: isLoading,
            onSubmit
        }
    }

    const useSendOtp = (options: {
        onVerifySuccess?: (res: any) => void
        onCheckResrtSuccess?: (res: any) => void
    }) => {
        const sendMutation = useMutation({
            mutationFn: async () => {
                return await postSendOtp(email)
            },
            onSuccess: (res) => {
                setOtpData(res.data)
            },
            onError: (err: unknown) => handleError(err)
        })

        const verifyMutation = useMutation({
            mutationFn: async (otp: string) => {
                return await postVerifyOtp({ email, otp })
            },
            onSuccess: (res) => {
                options?.onVerifySuccess?.(res)
            },
            onError: (err: unknown) => handleError(err)
        })

        const checkResetMutation = useMutation({
            mutationFn: async (otp: string) => {
                return await postCheckResetPassword({ email, otp })
            },
            onSuccess: (res) => {
                options?.onCheckResrtSuccess?.(res)
            },
            onError: (err: unknown) => handleError(err)
        })

        return {
            method,
            isLoadingSend: sendMutation.isPending,
            isLoadingVerify: verifyMutation.isPending,
            sendOtp: sendMutation.mutateAsync,
            verifyOtp: verifyMutation.mutateAsync,
            checkResetPass: checkResetMutation.mutateAsync
        }
    }

    const verifyPassword = (options?: {
        onSuccess: (res: any) => void
    }) => {
        const method = useForm<checkPassword>({
            resolver: zodResolver(checkPasswordSchema),
            mode: 'onBlur',
            defaultValues: {
                password: '',
                confirmPassword: ''
            }
        })
        const [success, isSuccess] = useState(false)
        const location = useLocation();
        const from = location.state?.from

        const handlePassword = async () => {
            const password = method.getValues('password')
            const isValid = await method.trigger(["password", "confirmPassword"]);
            if (isValid && password !== undefined) {
                setPassword(password)
                if (from === 'register') {
                    nav('/register')
                } else if (from === 'forgot-password') {
                    isSuccess(true)
                }
            } else {
                return
            }
        }

        const passwordMutation = useMutation({
            mutationFn: async ({
                data,
                verifyData }: {
                    data: resetPasswordRequest
                    verifyData: { action: string; token: string }
                }) => {
                return await postResetPassword(data, verifyData)
            },
            onSuccess: (res) => {
                toast.success(res?.message)
                options?.onSuccess?.(res)
            },
            onError: (err: unknown) => handleError(err)
        })

        const handleResetPassword = async () => {
            const password = method.getValues('password')
            const confirmPassword = method.getValues('confirmPassword')
            const isValid = await method.trigger(["password", "confirmPassword"]);

            if (!verifyData) {
                toast.error("Missing verify data")
                return
            }

            if (isValid && password !== undefined) {
                const data: resetPasswordRequest = {
                    rePassword: password,
                    newPassword: confirmPassword
                }
                await passwordMutation.mutateAsync({
                    data,
                    verifyData
                })
                if (from === 'register') {
                    nav('/register')
                } else if (from === 'forgot-password') {
                    isSuccess(true)
                }
            } else {
                return
            }
        }

        return {
            method,
            success,
            handlePassword,
            handleResetPassword
        }
    }

    const useRegisterDetail = () => {
        const method = useForm<registerDetail>({
            resolver: zodResolver(registerDetailSchema),
            mode: 'onBlur',
            defaultValues: {
                firstName: '',
                middleName: '',
                lastName: '',
                birthDate: '',
                addressId: ''
            }
        })

        const handleRegisterDetail = async () => {
            const firstName = method.getValues('firstName')
            const middleName = method.getValues('middleName')
            const lastName = method.getValues('lastName')
            const birthDate = method.getValues('birthDate')
            const addressId = method.getValues('addressId')

            const isValid = await method.trigger(["firstName", "middleName", "lastName", "birthDate", "addressId"]);

            if (isValid) {
                const data: registerDetail = {
                    firstName,
                    middleName,
                    lastName,
                    birthDate,
                    addressId
                }
                setRegisterData(data)
                nav('/select-identity')
            } else {
                return
            }
        }

        return {
            method,
            handleRegisterDetail,
        }
    }

    const useRegister = () => {
        const {
            method,
            registerClient,
            select,
            setSelect,
            isLoadingClient,
        } = useFormData()
        
        const onSubmit = async () => {
            const data: registerClientRequest = {
                email: email,
                password: password,
                firstName: registerData?.firstName ?? '',
                middleName: registerData?.middleName ?? '',
                lastName: registerData?.lastName ?? '',
                birthDate: registerData?.birthDate ?? '',
                addressId: registerData?.addressId ?? '',
                picture: null
            }
            if (!verifyData) {
                toast.error("Missing verify data")
                return
            }
            if (select === "client") {
                await registerClient({
                    data,
                    verifyData
                })
                nav('/login')
            } else {
                nav('/about-you')
            }
        }

        return {
            method,
            select,
            setSelect,
            onSubmit,
            isLoadingClient,
        }
    }

    const useForgotPassword = () => {
        const method = useForm<checkEmailRequest>({
            resolver: zodResolver(checkEmailRequestSchema),
            mode: 'onBlur',
            defaultValues: {
                email: ''
            }
        })

        const mutation = useMutation({
            mutationFn: async (email: string) => {
                return await postForgotPassword(email)
            },
            onSuccess: (_, email) => {
                toast.success(`${_.message}`)
                setEmail(email)
            },
            onError: (err: unknown) => handleError(err)
        })

        const onSubmit = async () => {
            const email = method.getValues("email")
            if (!email) {
                toast.error("Vui lòng nhập email")
                return
            }
            await mutation.mutateAsync(email)
            nav('/send-otp', { state: { from: "forgot-password" } })
        }

        return {
            method,
            isLoading: mutation.isPending,
            onSubmit,
        }
    }

    const useGetAdress = () => {
        const q = 'Sing'
        const response = useQuery<addressResponse>({
            queryKey: ['address', q],
            queryFn: async () => {
                try {
                    return await getAddress({
                        q
                    })
                } catch (err: unknown) {
                    handleError(err)
                    throw err
                }
            },
        })
        return {
            data: response?.data?.data ?? [],
            message: response?.data?.message,
            loading: response?.isLoading
        }
    }

    const useLogin = () => {
        const { setAuth } = useAuthen()
        const method = useForm<loginRequest>({
            resolver: zodResolver(loginRequestSchema),
            mode: 'onChange',
            defaultValues: {
                email: '',
                password: ''
            }
        })

        const mutation = useMutation({
            mutationFn: async (data: loginRequest) => {
                return await postLogin(data)
            },
            onSuccess: (_) => {
                toast.success(`${_.message}`)
            },
            onError: (err: unknown) => handleError(err)
        })

        const onSubmit = method.handleSubmit(async (data) => {
            const response = await mutation.mutateAsync(data)
            if (!response?.data) return

            setAuth({
                user: response?.data?.user,
                role: response?.data?.role,
                accessToken: response?.data?.token.accessToken,
                refreshToken: response?.data?.token.refreshToken
            })

            nav('/home')
        })

        return {
            method,
            isLoading: mutation.isPending,
            onSubmit,
        }
    }

    return {
        useCheckEmail,
        useSendOtp,
        verifyPassword,
        useRegisterDetail,
        useRegister,
        useForgotPassword,
        useGetAdress,
        useLogin
    }
}