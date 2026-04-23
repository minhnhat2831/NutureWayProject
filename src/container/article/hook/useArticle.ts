import { handleError } from "@/utils/ErrorHandle"
import { useTableManager } from "@/hook/useTableManager"
import { deleteArticleFavorite, getArticleDetail, getListArticle, postArticleFavorite } from "../service/Api"
import { useMutation, useQuery } from "@tanstack/react-query"
import type { articleListItem } from "../schema/ArticleSchema.type"
import { queryClient } from "@/main"

export default function useArticle(){
    const useGetListArticle = () => {
        const type = 'article'
        const {
            data,
            metadata,
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
                        f_type : type
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
            loading: isLoading
        }
    }

    const useGetListPdSessions = () => {
        const type = 'pd'
        const {
            data,
            metadata,
            isLoading
         } = useTableManager({
            queryKey : ['pd-session'],
            queryFn : async ({ page, limit, search, sort, offset }) => {
                try{
                    return await getListArticle({
                        page,
                        sort,
                        limit,
                        search,
                        offset,
                        f_type : type
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
            loading: isLoading
        }
    }

    const useGetArticleDetail = (id : string) => {
        const query = useQuery<articleListItem>({
            queryKey : ['article', id],
            queryFn : async () => {
                try{
                    return await getArticleDetail(id)
                }catch(error : unknown){
                    handleError(error)
                    throw error
                }
            },
            enabled : !!id
        })
        return {
            data : query?.data?.data,
            loading : query?.isLoading
        }
    }

    const postFavorite = () => {
        const mutation = useMutation({
            mutationFn : async (payload : { id : string, status : boolean}) => {
                return await postArticleFavorite(payload.id, payload.status)
            },onSuccess : () => {
                queryClient.invalidateQueries({ queryKey : ['article']})
            },onError : (err : undefined) =>{
                handleError(err)
            }
        })

        return { 
            onSubmit : mutation.mutateAsync,
            loading : mutation.isPending 
        }
    }
    const deleteFavorite = () => {
        const mutation = useMutation({
            mutationFn : async (id : string) => {
                return await deleteArticleFavorite(id)
            },onSuccess : () => {
                queryClient.invalidateQueries({ queryKey : ['article']})
            },onError : (err : undefined) =>{
                handleError(err)
            }
        })

        return { 
            onSubmit : mutation.mutateAsync,
            loading : mutation.isPending 
        }
    }

    return {
        useGetListArticle,
        useGetArticleDetail,
        useGetListPdSessions,
        postFavorite,
        deleteFavorite
    }
}