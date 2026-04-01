import { useForm } from "react-hook-form"
import type { loginRequest } from "../schema/AuthSchema.type"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginRequestSchema } from "../schema/AuthSchema"
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { handleError } from "@/utils/ErrorHandle"
import { postLogin } from "../service/Api"
import { useNavigate } from "react-router"

export default function useFormLogin() {
    const nav = useNavigate()
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
        onSuccess: (res) => {
            toast.success(`${res.message}`)
            localStorage.setItem("auth", JSON.stringify(res?.data?.user))
            localStorage.setItem("role", (res?.data?.role))
            localStorage.setItem("accessToken", (res?.data?.tokens?.accessToken))
            localStorage.setItem("refreshToken", (res?.data?.tokens?.refreshToken))
            nav('/home')
        },
        onError: (err: unknown) => handleError(err)
    })

    const onSubmit = method.handleSubmit(async (data) => {
        await mutation.mutateAsync(data)
    })

    return {
        method,
        isLoading: mutation.isPending,
        onSubmit,
    }
}