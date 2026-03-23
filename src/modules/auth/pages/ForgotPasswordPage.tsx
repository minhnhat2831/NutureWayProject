import { InputForm } from "@/components/form/InputForm"
import AuthLayout from "../components/layout/AuthLayout"
import useAuth from "../hooks/useAuth"

export default function ForgotPasswordPage() {
    const { useforgotPassword } = useAuth()
    const { method, isLoading, onSubmit } = useforgotPassword()

    return (<>
        <AuthLayout
            method={method}
            title="Forgot password"
            subTitle="Please enter your email to reset the password"
            children={<>
                <InputForm
                    name="email"
                    label="Email"
                    placeholder="Email"
                    required>
                </InputForm>
            </>}
            disable={isLoading}
            buttonName={isLoading ? "Checking..." : "Reset Password"}
            onClick={onSubmit}
        >
        </AuthLayout>
    </>)
}