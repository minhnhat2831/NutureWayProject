import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { registerStepData } from "../schema/AuthSchema.type";
import { registerStepSchema } from "../schema/AuthSchema";
import { useMutation } from "@tanstack/react-query";
import { postRegisterClient, postSendOtp, postVerifyOtp } from "../service/Api";
import { handleError } from "@/utils/ErrorHandle";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useOnboardingStore } from "../store/useOnboardingStore";

export default function useFormData() {
    const { email, verifyData, setVerifyData } = useOnboardingStore()

    const nav = useNavigate()
    const method = useForm<registerStepData>({
        mode : 'onChange',
        resolver: zodResolver(registerStepSchema),
        defaultValues: {
            otp: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            middleName: '',
            lastName: '',
            birthDate: '',
            addressId: '',
        }
    })

    const verifyOtpMutation = useMutation({
        mutationFn: (otp: string) => postVerifyOtp({ email, otp }),
        onSuccess: (res) => {
            toast.success(`${res.message}`)
            setVerifyData(res.data)
        },
        onError: (err: unknown) => handleError(err)
    })

    const registerMutation = useMutation({
        mutationFn: (data: registerStepData) =>
            postRegisterClient({
                email : email,
                password: data.password,
                firstName: data.firstName,
                middleName: data.middleName ?? '',
                lastName: data.lastName,
                birthDate: data.birthDate,
                addressId: data.addressId,
                picture: null,
            }, verifyData!),
        onSuccess: (res) => {
            toast.success(res.message)
            nav('/login')
        },
        onError: (err: unknown) => handleError(err)
    })

    const sendMutation = useMutation({
        mutationFn: () => postSendOtp(email),
        onError: (err) => handleError(err)
    })

    return {
        method,
        verifyOtp: verifyOtpMutation.mutateAsync,
        register: registerMutation.mutateAsync,
        sendOtp: sendMutation.mutateAsync,
        isLoadingVerifyOtp: verifyOtpMutation.isPending,
        isLoadingRegister: registerMutation.isPending,
        isLoadingSendOtp: sendMutation.isPending
    }
}