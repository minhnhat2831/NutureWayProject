import { useState } from "react"

export const useStepForm = (totalSteps: number) => {
    const [step, setStep] = useState(1)
    const total = 100 / (totalSteps + 1)

    const [uploadProgress, setUploadProgress] = useState(total);

    const next = () => {
        setStep(s => Math.min(s + 1, totalSteps))
        setUploadProgress(prev => (prev >= 100 ? 0 : prev + total));
    }
    const back = () => {
        setStep(s => Math.max(s - 1, 1))
        setUploadProgress(prev => (prev >= 100 ? 0 : prev - total));
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