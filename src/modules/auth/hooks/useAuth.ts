import { useForm } from "react-hook-form"
import type { checkEmailRequest, checkPassword, registerClientRequest, registerDetail, registerDoulaRequest } from "../schema/AuthSchema.type"
import { useMutation } from "@tanstack/react-query"
import { postCheckEmailorPhone, postForgotPassword, postRegisterClient, postSendOtp, postVerifyOtp } from "../service/Api"
import { toast } from "react-toastify"
import { useOnboardingStore } from "../store/useOnboardingStore"
import { useLocation, useNavigate } from "react-router"
import { checkEmailRequestSchema, checkPasswordSchema, registerClientRequestSchema, registerDetailSchema, registerDoulaRequestSchema } from "../schema/AuthSchema"
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react"

export default function useAuth() {
    const nav = useNavigate()
    const {
        email,
        verifyData,
        setOtpData,
        setVerifyData,
        setEmail,
        setPassword,
        setregisterData,
        registerData,
        password } = useOnboardingStore()

    const useCheckEmail = () => {
        const method = useForm<checkEmailRequest>({
            resolver: zodResolver(checkEmailRequestSchema),
            mode: 'onBlur',
            defaultValues: {
                email: ''
            }
        })

        const mutation = useMutation({
            mutationFn: async (email: string) => {
                return await postCheckEmailorPhone(email)
            },
            onSuccess: (_, email) => {
                setEmail(email)
            },
            onError: (err: any) => {
                toast.error(`${err.response?.data?.message}`)
            }
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
                nav('/send-otp', { state: { from: "login" } })
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
            onError: (err: any) => {
                toast.error(`${err.response?.data?.message}`)
            }
        })

        const verifyMutation = useMutation({
            mutationFn: async (otp: string) => {
                return await postVerifyOtp({ email, otp })
            },
            onSuccess: (res) => {
                toast.success(res?.message)
                if (from === 'login') {
                    nav('/change-password', { state: { from: "login" } })
                } else if (from === 'forgot-password') {
                    nav('/change-password', { state: { from: "forgot-password" } })
                }
                setVerifyData(res.data)
            },
            onError: (err: any) => {
                toast.error(`${err.response?.data?.message}`)
            }
        })

        return {
            method,
            email,
            isLoadingSend: sendMutation.isPending,
            isLoadingVerify: verifyMutation.isPending,
            sendOtp: sendMutation.mutateAsync,
            verifyOtp: verifyMutation.mutateAsync,
            verifyData: verifyMutation.data,
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
            const password = method.getValues('password')
            const isValid = await method.trigger(["password", "confirmPassword"]);
            if (isValid && password !== undefined) {
                isLoading(false)
                setPassword(password)
                if (from === 'login') {
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
            handlePassword
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

                setregisterData(data)
                nav('/select-identity')
            } else {
                toast.error('This field cannot empty')
                return
            }
        }

        return {
            method,
            handleRegisterDetail
        }
    }

    const useRegiter = () => {
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
            onError: (err: any) => {
                toast.error(`${err.response?.data?.message}`)
            }
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

    const useforgotPassword = () => {
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
                setEmail(email)
            },
            onError: (err: any) => {
                toast.error(`${err.response?.data?.message}`)
            }
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

    return {
        useCheckEmail,
        useSendOtp,
        verifyPassword,
        useRegisterDetail,
        useRegiter,
        useforgotPassword
    }
}