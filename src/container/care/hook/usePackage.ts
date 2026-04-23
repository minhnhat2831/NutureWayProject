import { useMutation } from "@tanstack/react-query"
import { getMyDoulaPackage, postDoulaPackage } from "../service/Api"
import { handleError } from "@/utils/ErrorHandle"
import type { packageFormValues, packageRequest } from "../schema/PackageSchema.type"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { packageFormSchema } from "../schema/PackageSchema"
import { useState } from "react"
import { useAuthen } from "@/context/AuthContext"
import { useTableManager } from "@/hook/useTableManager"

export default function usePackage() {
    const { role } = useAuthen()
    const useGetMyPackage = () => {
        const {
            data,
            isLoading,
        } = useTableManager({
            queryKey: ['doula-package'],
            queryFn: async ({ page, offset, search, sort }) => {
                try {
                    return await getMyDoulaPackage({
                        page,
                        limit : 100,
                        offset,
                        search,
                        sort
                    })
                } catch (err: unknown) {
                    handleError(err)
                    throw err
                }
            },
            enabled: role === 'doula'
        })

        return {
            data: data ?? [],
            loading: isLoading,
        }
    }

    const usePostDoulaPackage = () => {
        const [success, setSuccess] = useState(false)
        const method = useForm<packageFormValues>({
            resolver: zodResolver(packageFormSchema),
            mode: 'onChange',
            defaultValues: {
                description: '',
                image: '',
                name: '',
                price: '',
                qualifications: [],
                shortDescription: ''
            }
        })
        const mutation = useMutation({
            mutationFn: async (data: packageRequest) => {
                return await postDoulaPackage(data)
            }, onSuccess: (res) => {
                toast.success(res.message)
                setSuccess(true)
            }, onError: (err: unknown) => {
                handleError(err)
            }
        })

        return {
            onSubmit: mutation.mutateAsync,
            loading: mutation.isPending,
            method: method,
            success,
            setSuccess
        }
    }

    return {
        useGetMyPackage,
        usePostDoulaPackage,
    }
}