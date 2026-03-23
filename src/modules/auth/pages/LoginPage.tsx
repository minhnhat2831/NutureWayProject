import { InputForm } from "@/components/form/InputForm"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import AuthLayout from "../components/layout/AuthLayout"

export default function LoginPage() {
    const method = useForm()
    const nav = useNavigate()

    const handleLogin = () => {
        nav('/home')
    }
    return (<>
        <AuthLayout
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
        </AuthLayout>

    </>)
}