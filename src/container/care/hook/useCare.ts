import { useTableManager } from "@/hook/useTableManager"
import { getCareById, getMyCares } from "../service/Api"
import { handleError } from "@/utils/ErrorHandle"
import { useQuery } from "@tanstack/react-query"
import type { careListDetail } from "../schema/CareSchema.type"
import { useAuthen } from "@/context/AuthContext"

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
            enabled : role === 'user'
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

    

    return {
        useGetMycare,
        useGetCareById,

    }
}