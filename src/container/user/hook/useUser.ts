import { useQuery } from "@tanstack/react-query"
import { getUserById } from "../service/Api"
import { handleError } from "@/utils/ErrorHandle"
import type { userListItemResponse } from "../schema/UserSchema.type"

export default function useUser(){
    const useGetUserById = (id : string) => {
        const query = useQuery<userListItemResponse>({
            queryKey : ['user', id],
            queryFn : async () => {
                try{
                    return await getUserById(id)
                }catch(err : unknown){
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
        useGetUserById
    }
}