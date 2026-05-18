import { useTableManager } from "@/hook/useTableManager"
import { getCareDocument } from "../services/Api"
import { handleError } from "@/utils/ErrorHandle"

export default function useCareDocument() {
    const useGetAllDocument = (id: string) => {
        const {
            data,
            isLoading,
            metadata
        } = useTableManager({
            queryKey: ['care-document', id],
            queryFn: async ({ page, limit, offset, search, sort }) => {
                try {
                    return await getCareDocument(id, {
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
            enabled : !!id
        })
        return {
            data,
            isLoading,
            metadata
        }
    }

    return {
        useGetAllDocument
    }
}