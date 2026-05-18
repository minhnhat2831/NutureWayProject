import { useTableManager } from "@/hook/useTableManager"
import { getCareById, getMyCares, postManuallyClient } from "../service/Api"
import { handleError } from "@/utils/ErrorHandle"
import { useMutation, useQuery } from "@tanstack/react-query"
import type { careListDetail, manuallyClientRequest } from "../schema/CareSchema.type"
import { useAuthen } from "@/context/AuthContext"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { manuallyClientRequestSchema } from "../schema/CareSchema"

export default function useCare() {
    const { role } = useAuthen()
    const useGetMycare = () => {
        const {
            data,
            isLoading
        } = useTableManager({
            queryKey: ['care'],
            queryFn: async ({ page, limit, offset, search, sort }) => {
                try {
                    return await getMyCares({
                        page,
                        limit,
                        offset,
                        search,
                        sort
                    })
                } catch (err: unknown) {
                    handleError(err)
                    throw err
                }
            },
            enabled : role !!= 'doula'
        })

        return {
            data: data ?? [],
            loading: isLoading
        }
    }

    const useGetCareById = (id: string) => {
        const query = useQuery<careListDetail>({
            queryKey: ['care', id],
            queryFn: async () => {
                try {
                    return await getCareById(id)
                } catch (err: unknown) {
                    handleError(err)
                    throw err
                }
            },
            enabled: !!id
        })
        return {
            data: query?.data?.data,
            loading: query?.isLoading
        }
    }

    const usePostClientManually = (options?: {
        onSuccess: (res: any) => void
    }) => {
        const method = useForm<manuallyClientRequest>({
            mode : 'onChange',
            resolver : zodResolver(manuallyClientRequestSchema),
            defaultValues : {
                doulaPackageId : '',
                firstName : '',
                lastName : '',
                fullName : ''
            }
        })

        const mutation = useMutation({
            mutationFn : async (data : manuallyClientRequest) => {
                return await postManuallyClient(data)
            },onSuccess : (res) => {
                options?.onSuccess?.(res)
            },
            onError : (err : unknown) => {
                handleError(err)
            }
        })

        return { 
            method,
            onSubmit : mutation.mutateAsync,
            loading : mutation.isPending
        }
    }

    return {
        useGetMycare,
        useGetCareById,
        usePostClientManually
    }
}