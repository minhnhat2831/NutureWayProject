import { getAllCategory } from "../service/Api"
import { handleError } from "@/utils/ErrorHandle"
import { useTableManager } from "@/hook/useTableManager"

export default function useCategory(){
    const useGetListCategory = () => {
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
            queryKey : ['category'],
            queryFn : async ({ page, limit, search, sort, offset }) => {
                try{
                    return await getAllCategory({
                        page,
                        sort,
                        limit,
                        search,
                        offset,
                        f_status : 'active'
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
        useGetListCategory
    }
}