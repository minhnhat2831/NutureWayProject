import { useMutation } from "@tanstack/react-query";
import { postSwichRole } from "../service/Api";
import { useAuthen } from "@/context/AuthContext";
import { handleError } from "@/utils/ErrorHandle";

export default function useRole(){
    const { setAuth } = useAuthen()
    const mutation = useMutation({
        mutationFn : async () => {
            return await postSwichRole()
        },onSuccess : (res) => {
            setAuth({
                user : res?.data?.user,
                role : res?.data?.role,
                accessToken : res?.data?.tokens?.accessToken,
                refreshToken : res?.data?.tokens?.refreshToken
            })

        },onError : (err : any) => {
            handleError(err)
        }
    })

    return {
        onSubmit : mutation.mutateAsync,
        loading : mutation.isPending
    }
}