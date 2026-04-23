import { getAllCategory, getCategoryDetail } from "../service/Api"
import { handleError } from "@/utils/ErrorHandle"
import { useTableManager } from "@/hook/useTableManager"
import { useQuery } from "@tanstack/react-query"
import type { categoryListItem } from "../schema/CategorySchema.type"

export default function useCategory(){
    const useGetListCategory = () => {
        const {
            data,
            metadata,
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
        }
    }

    const useGetCategoryById = (id : string) => {
        const query = useQuery<categoryListItem>({
            queryKey : ['category', id],
            queryFn : async () => {
                try{
                    return await getCategoryDetail(id)
                }catch(err : any){
                    handleError(err)
                    throw err
                }
            },
            enabled : !!id
        })

        return {
            data : query?.data?.data,
            loading : query.isLoading
        }
    }

    return {
        useGetListCategory,
        useGetCategoryById
    }
}