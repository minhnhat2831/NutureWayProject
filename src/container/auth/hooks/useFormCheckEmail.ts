import { zodResolver } from "@hookform/resolvers/zod";
import { checkEmailRequestSchema } from "../schema/AuthSchema";
import type { checkEmailRequest } from "../schema/AuthSchema.type";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { handleError } from "@/utils/ErrorHandle";
import { useOnboardingStore } from "../store/useOnboardingStore";
import { postCheckEmailorPhone } from "../service/Api";

export default function useFormCheckEmail() {
    const method = useForm<checkEmailRequest>({
        resolver: zodResolver(checkEmailRequestSchema),
        mode: 'onChange',
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