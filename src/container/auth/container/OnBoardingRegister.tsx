import SectionSendOtp from "../components/common/SectionSendOtp"
import SectionChangePassword from "../components/common/SectionChangePassword"
import SectionRegisterDetail from "../components/common/SectionRegisterDetail"
import SectionSelectIdentity from "../components/common/SectionSelectIdentity"
import { useNavigate } from "react-router"
import { useStepForm } from "../hooks/useFormStage"
import type { registerStepData } from "../schema/AuthSchema.type"
import useFormData from "../hooks/useFormData"
import { useOnboardingStore } from "../store/useOnboardingStore"
import AuthLayout from "../components/layout/AuthLayout"
import { useEffect } from "react"
import { toast } from "react-toastify"

const STEPS = [
    { id: 1, title: 'Verify your email address', subTitle: 'We have sent a code to your designated email address. This is for the security of your account' },
    { id: 2, title: 'Create a password', subTitle: "Thank you for verifying your email. Now let's create a password for your account" },
    { id: 3, title: 'Your details', subTitle: "Welcome to NurtureWave! Tell us a bit more about yourself!" },
    { id: 4, title: 'Please select from below', subTitle: "Please choose from below your user identity" },
]

const STEP_FIELDS: Record<number, (keyof registerStepData)[]> = {
    1: ['otp'],
    2: ['password', 'confirmPassword'],
    3: ['firstName', 'middleName', 'lastName', 'birthDate', 'addressId'],
    4: [],
}

export default function OnBoardingRegister() {
    const { back, isFirst, isLast, next, step, uploadProgress } = useStepForm(4)
    const {
        method,
        verifyOtp,
        register,
        isLoadingRegister,
        isLoadingVerifyOtp
    } = useFormData()
    const { select, email } = useOnboardingStore()
    const nav = useNavigate()

    useEffect(() => {
        if (!email) {
            nav('/')
        }
    }, [email, nav])

    const handleNext = async () => {

        const fields = STEP_FIELDS[step]

        const isValid = await method.trigger(fields)
        if (!isValid) return

        if (step === 1) {
            const otp = method.getValues('otp')
            try {
                await verifyOtp(otp)
            } catch {
                return
            }
        }
        next()
    }

    const onSubmit = method.handleSubmit(async (data) => {
        if (select === '') {
            toast.error('Please select one from below')
        }
        if (select === 'client') {
            await register(data)
        } else if (select === 'doula') {
            nav('/about-you')
        }
    })

    const isLoading = isLoadingRegister || isLoadingVerifyOtp

    return (<>
        {STEPS.map((i, index) => i.id === step &&
            <AuthLayout
                key={index}
                method={method}
                title={i.title}
                subTitle={i.subTitle}
                disable={isLoading}
                buttonName="Next"
                onBack={isFirst ? () => nav('/') : back}
                valueProcessBar={uploadProgress}
                children={<>
                    {step === 1 && <SectionSendOtp email={email} />}
                    {step === 2 && <SectionChangePassword />}
                    {step === 3 && <SectionRegisterDetail />}
                    {step === 4 && <SectionSelectIdentity />}
                </>}
                onClick={isLast ? onSubmit : handleNext}

            />
        )}
    </>)
}