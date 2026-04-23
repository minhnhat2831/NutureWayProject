import { useState } from "react"

export const useStepForm = (totalSteps: number) => {
    const [step, setStep] = useState(1)
    const total = 100 / (totalSteps)

    const [uploadProgress, setUploadProgress] = useState(total);

    const next = () => {
        setStep(s => Math.min(s + 1, totalSteps))
        setUploadProgress(prev => Math.min(prev + total, 100));
    }

    const back = () => {
        setStep(s => Math.max(s - 1, 1))
        setUploadProgress(prev => Math.max(prev - total, total));
    }

    return {
        step,
        isFirst: step === 1,
        isLast: step === totalSteps,
        next,
        back,
        uploadProgress
    }
}