import { InputForm } from "@/components/form/InputForm"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import LoginLayout from "../components/LoginLayout"

export default function ForgotPasswordPage() {
    const method = useForm()
    const nav = useNavigate()

    return (<>
        <LoginLayout
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
            buttonName="Reset Password"
            onClick={() =>  nav('/send-otp', {state: { from: "forgot-password" }})}
        >
        </LoginLayout>
    </>)
}