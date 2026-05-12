import { useForm } from "react-hook-form";
import type { packageFormValues } from "../schema/PackageSchema.type";
import { packageFormSchema } from "../schema/PackageSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import useDoula from "@/container/doulas/hook/useDoula";
import { useEffect } from "react";

export default function useFormPackage(id : string) {
    const isEdit = !!id
    const { useGetDoulaPackageById } = useDoula()
    const { data } = useGetDoulaPackageById(id ?? '')
    const method = useForm<packageFormValues>({
        resolver: zodResolver(packageFormSchema),
        mode: 'onChange',
        values: {
            description: '',
            image: '',
            name: '',
            price: '',
            qualifications: [],
            shortDescription: ''
        }
    })

    useEffect(() => {
        if (isEdit && data) {
            method.reset({
                description: data.description ?? '',
                image: data.picture?.uri ?? '',
                name: data.name ?? '',
                price: data.price ?? '',
                qualifications: Array.isArray(data.qualifications)
                    ? data.qualifications.map((q) => ({
                        value: q
                    }))
                    : [],
                shortDescription: data.shortDescription ?? ''
            })
        }
    }, [data, isEdit])

    return {
        method
    }
}