import { useQuery } from "@tanstack/react-query"
import { getHelpCenter } from "../service/Api"
import { handleError } from "@/utils/ErrorHandle"
import type { helpCenterList } from "../schema/SettingSchema.type"

export default function useSetting(){
    const getSettingHelpCenter = () => {
        const query = useQuery<helpCenterList>({
            queryKey : ['help-center'],
            queryFn : async () => {
                try{
                    return await getHelpCenter()
                }catch(err : unknown){
                    handleError(err)
                    throw err
                }
            }
        })

        return { 
            data : query.data?.data ?? [],
            loading : query.isLoading,
            metadata : query.data?.metadata
        }
    }

    return {
        getSettingHelpCenter
    }
}