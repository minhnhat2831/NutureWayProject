import { useForm } from "react-hook-form"
import type { forgotPasswordStepData, resetPasswordRequest } from "../schema/AuthSchema.type"
import { zodResolver } from "@hookform/resolvers/zod"
import { forgotPasswordStepSchema } from "../schema/AuthSchema"
import { useMutation } from "@tanstack/react-query"
import { postCheckResetPassword, postForgotPassword, postResetPassword } from "../service/Api";
import { toast } from "react-toastify"
import { handleError } from "@/utils/ErrorHandle"
import { useState } from "react"
import { useOnboardingStore } from "../store/useOnboardingStore"

export default function useFormForgotData() {
    const { email, setEmail, verifyData, setVerifyData } = useOnboardingStore()
    const [success, setSuccess] = useState(false)
    const method = useForm<forgotPasswordStepData>({
        resolver: zodResolver(forgotPasswordStepSchema),
        mode: 'onChange',
        defaultValues: {
            otp: '',
            password: '',
            confirmPassword: '',
            email: ''
        }
    })

    const forgotMutation = useMutation({
        mutationFn: async (email: string) => {
            return await postForgotPassword(email)
        },
        onSuccess: (res) => {
            setEmail(res.data.email)
        },
        onError: (err: unknown) => handleError(err)
    })

    const checkResetMutation = useMutation({
        mutationFn: async (otp: string) => {
            return await postCheckResetPassword({ email, otp })
        },
        onSuccess: (res) => {
            setVerifyData(res.data)
        },
        onError: (err: unknown) => handleError(err)
    })

    const changePasswordMutation = useMutation({
        mutationFn: (data: resetPasswordRequest) =>
            postResetPassword({
                rePassword: data.rePassword,
                newPassword: data.newPassword
            }, verifyData!),
        onSuccess: (res) => {
            toast.success(res?.message)
            setSuccess(true)
        },
        onError: (err: unknown) => handleError(err)
    })

    return {
        method,
        success,
        forgotPassword: forgotMutation.mutateAsync,
        checkReset: checkResetMutation.mutateAsync,
        changePassword: changePasswordMutation.mutateAsync,
        isLoadingForgotPassowrd: forgotMutation.isPending,
        isLoadingCheckReset: checkResetMutation.isPending,
        isLoadingChangePassword: changePasswordMutation.isPending
    }
}