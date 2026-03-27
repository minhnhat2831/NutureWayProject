import { zodResolver } from "@hookform/resolvers/zod";
import { registerClientRequestSchema, registerDoulaRequestSchema } from "../schema/AuthSchema";
import type { registerClientRequest, registerDoulaRequest } from "../schema/AuthSchema.type";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { postRegisterClient } from "../service/Api";
import { toast } from "react-toastify";
import { handleError } from "@/utils/ErrorHandle";

export default function useFormData() {
    type form = registerClientRequest | registerDoulaRequest
    const [select, setSelect] = useState('client')
    const method = useForm<form>({
        resolver: zodResolver(select === 'client' ? registerClientRequestSchema : registerDoulaRequestSchema),
        mode: 'onBlur',
        defaultValues: select === 'client' ? {
            email: '',
            password: '',
            firstName: '',
            middleName: '',
            lastName: '',
            birthDate: '',
            addressId: ''
        } : {
            email: '',
            password: '',
            firstName: '',
            middleName: '',
            lastName: '',
            birthDate: '',
            addressId: '',
            title: '',
            description: '',
            qualifications: [],
            categoryIds: [],
            photos: [],
            subscription: {
                id: '',
                priceName: ''
            },
            voucherId: '',
            stripePaymentMethodId: ''
        }
    })

    const registerClientMutation = useMutation({
        mutationFn: async ({
            data,
            verifyData
        }: {
            data: registerClientRequest
            verifyData: { action: string; token: string }
        }) => {
            return await postRegisterClient(data, verifyData)
        },
        onSuccess: (res) => {
            toast.success(res.message)
        },
        onError: (err: unknown) => handleError(err)
    })

    return {
        method,
        select,
        setSelect,
        registerClient: registerClientMutation.mutateAsync,
        isLoadingClient: registerClientMutation.isPending,
    }
}