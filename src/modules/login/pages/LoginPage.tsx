import { InputForm } from "@/components/form/InputForm"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import LoginLayout from "../components/LoginLayout"

export default function LoginPage() {
    const method = useForm()
    const nav = useNavigate()

    const handleLogin = () => {
        nav('/send-otp', {state: { from: "login" }})
    }
    return (<>
        <LoginLayout
            method={method}
            title="Login"
            children={<>
                <InputForm
                    name="email"
                    label="Email"
                    placeholder="Email"
                    required>
                </InputForm>
                <InputForm
                    type="password"
                    name="password"
                    label="Password"
                    required
                    placeholder="Password">
                </InputForm>
                <p
                    className="text-violet-700 hover:text-violet-500 font-serif underline flex justify-end cursor-pointer"
                    onClick={() => nav('/forgot-password')}>Forgot password?</p>
            </>}
            buttonName="Login"
            onClick={() => handleLogin()}
        >
        </LoginLayout>

    </>)
}