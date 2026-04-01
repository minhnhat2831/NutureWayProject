import { useStepForm } from "../hooks/useFormStage"
import { useNavigate } from "react-router"
import SectionSendOtp from "../components/common/SectionSendOtp"
import SectionForgotPassword from "../components/common/SectionForgotPassword"
import SectionChangePassword from "../components/common/SectionChangePassword"
import type { forgotPasswordStepData, resetPasswordRequest } from "../schema/AuthSchema.type"
import useFormForgotData from "../hooks/useFormForgotData"
import AuthLayout from "../components/layout/AuthLayout"
import { useEffect } from "react"
import { useOnboardingStore } from "../store/useOnboardingStore"

const STEPS = [
    { id: 1, title: 'Forgot password', subTitle: 'Please enter your email to reset the password' },
    { id: 2, title: 'Check your email', subTitle: "We have sent a code to your designated email address. This is for the security of your account" },
    { id: 3, title: 'Set a new password', subTitle: "Create a new password. Ensure it differs from previous ones for sercurity" },
]

const STEP_FIELDS: Record<number, (keyof forgotPasswordStepData)[]> = {
    1: ['email'],
    2: ['otp'],
    3: ['password', 'confirmPassword'],
}

export default function OnBoaringForgotPassword() {
    const { back, isFirst, isLast, next, step, uploadProgress } = useStepForm(3)

    const {
        method,
        success,
        checkReset,
        forgotPassword,
        changePassword,
        isLoadingChangePassword,
        isLoadingCheckReset,
        isLoadingForgotPassowrd
    } = useFormForgotData()
    const nav = useNavigate()
    const { email } = useOnboardingStore()

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
            const email = method.getValues('email')
            try {
                await forgotPassword(email)
            } catch {
                return
            }
        }

        if (step === 2) {
            const otp = method.getValues('otp')
            try {
                await checkReset(otp)
            } catch {
                return
            }
        }
        next()
    }

    const isLoading = isLoadingChangePassword || isLoadingCheckReset || isLoadingForgotPassowrd

    const onSubmit = method.handleSubmit(async (data) => {
        const dataSubmit: resetPasswordRequest = {
            rePassword: data.password,
            newPassword: data.confirmPassword
        }
        try {
            await changePassword(dataSubmit)
        } catch {
            return
        }
    })

    return (<>
        {success === false && <>
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
                        {step === 1 && <SectionForgotPassword />}
                        {step === 2 && <SectionSendOtp email={email} />}
                        {step === 3 && <SectionChangePassword />}
                    </>}
                    onClick={isLast ? onSubmit : handleNext}
                />
            )}
        </>}

        {success === true && <>
            <AuthLayout
                method={method}
                title="Password update"
                subTitle="Your password has been updated"
                children={<></>}
                buttonName="Login"
                onClick={() => nav('/login')}
            >
            </AuthLayout>
        </>
        }
    </>)
}