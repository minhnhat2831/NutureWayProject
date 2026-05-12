import { useMutation } from "@tanstack/react-query";
import type { packageRequest } from "../schema/PackageSchema.type";
import { postPackageRequest } from "../services/Api";
import { toast } from "react-toastify";
import { handleError } from "@/utils/ErrorHandle";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { packageRequestSchema } from "../schema/PackageSchema";

export default function usePackageRequest(){
    const method = useForm<packageRequest>({
        mode : 'onChange',
        resolver : zodResolver(packageRequestSchema),
        defaultValues : {
            doulaPackageId : '',
            message : '',
            userId : ''
        }
    })
    const mutation = useMutation({
        mutationFn : async (data : packageRequest) => {
            return await postPackageRequest(data)
        },onSuccess : (res) => {
            toast.success(res.message)
        },onError : (err : unknown) => {
            handleError(err)
        }
    })

    return {
        method,
        onSubmit : mutation.mutateAsync,
        loading : mutation.isPending
    }
}