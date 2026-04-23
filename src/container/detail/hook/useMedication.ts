
import { getCareMedication, postCareMedication } from "@/container/care/service/Api"
import { queryClient } from "@/main"
import { handleError } from "@/utils/ErrorHandle"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import type { careMedicationListResponse, careMedicationRequest } from "../schema/MedicationSchema.type"
import { careMedicationRequestSchema } from "../schema/MedicationSchema"

export default function useMedication() {
    const useCareMedication = (id: string) => {
        const query = useQuery<careMedicationListResponse>({
            queryKey: ['care-medication', id],
            queryFn: async () => {
                try {
                    return await getCareMedication(id)
                } catch (err: unknown) {
                    handleError(err)
                    throw err
                }
            },
            enabled: !!id
        })
        return {
            data: query?.data?.data ?? [],
            loading: query?.isLoading
        }
    }

    const usePostCareMedication = () => {
        const method = useForm<careMedicationRequest>({
            resolver: zodResolver(careMedicationRequestSchema),
            mode: 'onChange',
            defaultValues: {
                amount: "",
                brandName: '',
                careId: '',
                dose: '',
                drugName: '',
                picture: '',
                references: ''
            }
        })
        const mutation = useMutation({
            mutationFn: async (data: careMedicationRequest) => {
                return await postCareMedication(data)
            }, onSuccess: (res) => {
                queryClient.invalidateQueries({ queryKey: ['care-medication', res?.data?.careId] })
                toast.success(res.message ?? 'Create success')
            }, onError: (err: unknown) => {
                handleError(err)
            }
        })

        return {
            method,
            onSubmit: mutation.mutateAsync,
            loading: mutation.isPending
        }
    }

    return {
        useCareMedication,
        usePostCareMedication
    }
}