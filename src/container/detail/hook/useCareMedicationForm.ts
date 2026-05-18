import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useMedication from "./useMedication";
import { careMedicationRequestSchema } from "../schema/MedicationSchema";
import type { careMedicationRequest } from "../schema/MedicationSchema.type";

export default function useMedicationForm() {
    const method = useForm<careMedicationRequest>({
        resolver: zodResolver(careMedicationRequestSchema),
        mode: 'onChange',
        defaultValues: {
            amount: "",
            brandName: '',
            careId: '',
            dose: '',
            drugName: '',
            picture: '',
            references: ''
        }
    })

    const { usePostCareMedication } = useMedication()
    const { onSubmit, loading } = usePostCareMedication()

    const submit = method.handleSubmit(async (data) => {
        const dataSubmit: careMedicationRequest = {
            careId : data.careId,
            amount : data.amount,
            brandName : data.brandName,
            dose : data.dose,
            drugName : data.drugName,
            picture : data.picture,
            references : data.references
        }
        console.log(data)
        await onSubmit(dataSubmit)
    })

    return {
        method,
        submit,
        loading
    }
}