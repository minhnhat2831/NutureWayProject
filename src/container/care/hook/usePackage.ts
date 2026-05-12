import { useMutation } from "@tanstack/react-query"
import { getMyDoulaPackage, postDoulaPackage, putDoulaPackage } from "../service/Api"
import { handleError } from "@/utils/ErrorHandle"
import type { packageRequest } from "../schema/PackageSchema.type"
import { toast } from "react-toastify"
import { useState } from "react"
import { useAuthen } from "@/context/AuthContext"
import { useTableManager } from "@/hook/useTableManager"
import { queryClient } from "@/main"

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
                        limit: 100,
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

    const useFormCarePackage = () => {
        const [success, setSuccess] = useState(false)

        const mutation = useMutation({
            mutationFn: async ({
                id,
                isEdit,
                data
            }: {
                id?: string
                isEdit?: boolean
                data: packageRequest
            }) => {
                if (isEdit) {
                    return await putDoulaPackage(id!, data)
                }
                return await postDoulaPackage(data)
            }, onSuccess: (res) => {
                queryClient.invalidateQueries({queryKey: ['doula-package']})
                toast.success(res.message)
                setSuccess(true)
            }, onError: (err: unknown) => {
                handleError(err)
            }
        })

        return {
            onSubmit: mutation.mutateAsync,
            loading: mutation.isPending,
            success,
            setSuccess
        }
    }

    return {
        useGetMyPackage,
        useFormCarePackage,
    }
}