import { useForm } from "react-hook-form"
import { type addressResponse, type checkEmailRequest, type checkPassword, type loginRequest, type registerClientRequest, type registerDetail, type registerDoulaRequest, type resetPasswordRequest } from "../schema/AuthSchema.type"
import { useMutation, useQuery } from "@tanstack/react-query"
import { getAddress, postCheckEmailorPhone, postCheckResetPassword, postForgotPassword, postLogin, postRegisterClient, postResetPassword, postSendOtp, postVerifyOtp } from "../service/Api"
import { toast } from "react-toastify"
import { useOnboardingStore } from "../store/useOnboardingStore"
import { useLocation, useNavigate } from "react-router"
import { checkEmailRequestSchema, checkPasswordSchema, loginRequestSchema, registerClientRequestSchema, registerDetailSchema, registerDoulaRequestSchema } from "../schema/AuthSchema"
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react"
import { handleError } from "@/utils/ErrorHandle"

export default function useAuth() {
    const nav = useNavigate()
    const {
        email,
        verifyData,
        setOtpData,
        setVerifyData,
        setEmail,
        setPassword,
        setRegisterData,
        registerData,
        password } = useOnboardingStore()

    const useCheckEmail = () => {
        const method = useForm<checkEmailRequest>({
            resolver: zodResolver(checkEmailRequestSchema),
            mode: 'onTouched',
            defaultValues: {
                email: ""
            }
        })

        const mutation = useMutation({
            mutationFn: async (email: string) => {
                return await postCheckEmailorPhone(email)
            },
            onSuccess: (_, email) => {
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
            const result = await mutation.mutateAsync(email)

            if (result?.data === true) {
                nav('/login')
            } else if (result?.data === false) {
                nav('/send-otp', { state: { from: "register" } })
            }
        }

        return {
            method,
            isLoading: mutation.isPending,
            onSubmit
        }
    }

    const useSendOtp = () => {
        const method = useForm<checkEmailRequest>({
            resolver: zodResolver(checkEmailRequestSchema),
            mode: 'onBlur',
            defaultValues: {
                email: ''
            }
        })
        const location = useLocation();
        const from = location.state?.from

        const sendMutation = useMutation({
            mutationFn: async () => {
                return await postSendOtp(email)
            },
            onSuccess: (res) => {
                setOtpData(res.data)
                toast.success(res?.message)
            },
            onError: (err: unknown) => handleError(err)
        })

        const verifyMutation = useMutation({
            mutationFn: async (otp: string) => {
                return await postVerifyOtp({ email, otp })
            },
            onSuccess: (res) => {
                toast.success(res?.message)
                if (from === 'register') {
                    nav('/change-password', { state: { from: "register" } })
                } else if (from === 'forgot-password') {
                    nav('/change-password', { state: { from: "forgot-password" } })
                }
                setVerifyData(res.data)
            },
            onError: (err: unknown) => handleError(err)
        })

        const checkResetMutation = useMutation({
            mutationFn: async (otp: string) => {
                return await postCheckResetPassword({ email, otp })
            },
            onSuccess: (res) => {
                toast.success(res?.message)
                if (from === 'forgot-password') {
                    nav('/change-password', { state: { from: "forgot-password" } })
                }
                setVerifyData(res.data)
            },
            onError: (err: unknown) => handleError(err)
        })

        return {
            method,
            email,
            isLoadingSend: sendMutation.isPending,
            isLoadingVerify: verifyMutation.isPending,
            sendOtp: sendMutation.mutateAsync,
            verifyOtp: verifyMutation.mutateAsync,
            verifyData: verifyMutation.data,
            checkResetPass: checkResetMutation.mutateAsync
        }
    }

    const verifyPassword = () => {
        const method = useForm<checkPassword>({
            resolver: zodResolver(checkPasswordSchema),
            mode: 'onBlur',
            defaultValues: {
                password: '',
                confirmPassword: ''
            }
        })
        const [loading, isLoading] = useState(false)
        const [success, isSuccess] = useState(false)
        const location = useLocation();
        const from = location.state?.from

        const handlePassword = async () => {
            isLoading(true)
            const password = method.getValues('password')
            const isValid = await method.trigger(["password", "confirmPassword"]);
            if (isValid && password !== undefined) {
                isLoading(false)
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
                isLoading(false)
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
            loading,
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
        type form = registerClientRequest | registerDoulaRequest
        const [select, setSelect] = useState('client')
        const method = useForm<form>({
            resolver: zodResolver(select === 'client' ? registerClientRequestSchema : registerDoulaRequestSchema),
            mode: 'onBlur',
            defaultValues: select === 'client' ? {
                email: '',
                password: '',
                firstName: '',
                middleName: '',
                lastName: '',
                birthDate: '',
                addressId: ''
            } : {
                email: '',
                password: '',
                firstName: '',
                middleName: '',
                lastName: '',
                birthDate: '',
                addressId: '',
                title: '',
                description: '',
                qualifications: [],
                categoryIds: [],
                photos: [],
                subscription: {
                    id: '',
                    priceName: ''
                },
                voucherId: '',
                stripePaymentMethodId: ''
            }
        })

        const registerClientMutation = useMutation({
            mutationFn: async ({
                data,
                verifyData
            }: {
                data: registerClientRequest
                verifyData: { action: string; token: string }
            }) => {
                return await postRegisterClient(data, verifyData)
            },
            onSuccess: (res) => {
                toast.success(res.message)
            },
            onError: (err: unknown) => handleError(err)
        })

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
                await registerClientMutation.mutateAsync({
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
            isLoadingClient: registerClientMutation.isPending
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
                        q: q
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
            await mutation.mutateAsync(data)
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