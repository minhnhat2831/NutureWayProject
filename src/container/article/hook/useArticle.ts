import { handleError } from "@/utils/ErrorHandle"
import { useTableManager } from "@/hook/useTableManager"
import { getListArticle } from "../service/Api"

export default function useArticle(){
    const useGetListArticle = () => {
        const {
            data,
            metadata,
            page,
            limit,
            search,
            setPage,
            setLimit,
            setSearch,
            setSort,
            sort,
            isLoading
         } = useTableManager({
            queryKey : ['article'],
            queryFn : async ({ page, limit, search, sort, offset }) => {
                try{
                    return await getListArticle({
                        page,
                        sort,
                        limit,
                        search,
                        offset,
                    })
                }catch(error : unknown){
                    handleError(error)
                    throw error
                }
            }
        })
        return {
            data: data ?? [],
            metadata: metadata ?? null,
            loading: isLoading,
            setSearch,
            page,
            limit,
            search,
            setPage,
            setLimit,
            setSort,
            sort
        }
    }

    return {
        useGetListArticle
    }
}