import { InputForm } from "@/components/form/InputForm"
import { useNavigate } from "react-router"
import AuthLayout from "../components/layout/AuthLayout"
import useAuth from "../hooks/useAuth"

export default function LoginPage() {
    const { useLogin } = useAuth()
    const { method, isLoading, onSubmit} = useLogin()
    const nav = useNavigate()

    return (<>
        <AuthLayout
            method={method}
            title="Login"
            disable={isLoading}
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
            onClick={() => onSubmit()}
        >
        </AuthLayout>

    </>)
}