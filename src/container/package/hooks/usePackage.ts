import { useMutation, useQuery } from "@tanstack/react-query"
import { handleError } from "@/utils/ErrorHandle"
import { getPackageRequestById, postPackageRequest } from "../services/Api"
import type { packageStatus } from "../schema/PackageSchema.type"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { packageStatusSchema } from "../schema/PackageSchema"
import { type myPackageListItemResponse } from "@/container/care/schema/PackageSchema.type"

export default function usePackages() {
    const usePostPackageRequestCheck = (option? : {
        onSuccess : (res : any) => void
    }) => {
        const method = useForm<packageStatus>({
            resolver : zodResolver(packageStatusSchema),
            mode : 'onChange',
            defaultValues : {
                status : '',
                notificationId : ''
            }
        })
        const mutation = useMutation({
            mutationFn: async (payload: { id: string, data: packageStatus }) => {
                return await postPackageRequest(payload.id, payload.data)
            }, onSuccess: (res) => {
                option?.onSuccess?.(res)
            }, onError: (err: unknown) => {
                handleError(err)
            }
        })

        return {
            method,
            onSubmit : mutation.mutateAsync,
            loading : mutation.isPending
        }
    }

    const useGetPackageRequestById = (id : string) => {
        const query = useQuery<myPackageListItemResponse>({
            queryKey : ['package-request', id],
            queryFn : async () => {
                try{
                    return await getPackageRequestById(id)
                }catch (err : unknown){
                    handleError(err)
                    throw err
                }
            },
            enabled : !!id
        })
        return {
            data : query?.data?.data,
            loading : query?.isLoading
        }
    }

    return {
        usePostPackageRequestCheck,
        useGetPackageRequestById
    }

}