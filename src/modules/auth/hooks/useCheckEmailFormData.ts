import { zodResolver } from "@hookform/resolvers/zod";
import { checkEmailRequestSchema } from "../schema/AuthSchema";
import type { checkEmailRequest } from "../schema/AuthSchema.type";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { postCheckEmailorPhone } from "../service/Api";
import { handleError } from "@/utils/ErrorHandle";
import { useOnboardingStore } from "../store/useOnboardingStore";

export default function useCheckEmailFormData() {
    const method = useForm<checkEmailRequest>({
        resolver: zodResolver(checkEmailRequestSchema),
        mode: 'onTouched',
        defaultValues: {
            email: ""
        }
    })

    const { setEmail } = useOnboardingStore()

    const mutation = useMutation({
        mutationFn: async (email: string) => {
            return await postCheckEmailorPhone(email)
        },
        onSuccess: (_, email) => {
            setEmail(email)
        },
        onError: (err: unknown) => handleError(err)
    })

    return {
        method,
        checkEmail : mutation.mutateAsync,
        isLoading : mutation.isPending
    }
}