import { useNavigate } from "react-router"
import AuthLayout from "../components/layout/AuthLayout"
import { InputForm } from "@/components/form/InputForm"
import useFormLogin from "../hooks/useFormLogin"

export default function LoginContainer(){
    const { method, isLoading, onSubmit } = useFormLogin()
    const nav = useNavigate()

    return (<>
        <AuthLayout
            method={method}
            title="Login"
            disable={isLoading}
            onBack={() => nav(-1)}
            children={<>
                <InputForm
                    name="email"
                    label="Email"
                    placeholder="Email"
                    disabled={isLoading}
                    required>
                </InputForm>
                <InputForm
                    type="password"
                    name="password"
                    label="Password"
                    required
                    disabled={isLoading}
                    placeholder="Password">
                </InputForm>
                <p
                    className="w-fit ml-auto text-violet-700 hover:text-violet-500 font-serif underline cursor-pointer"
                    onClick={() => nav('/forgot-password', { state: { from: "forgot-password" } })}>Forgot password?</p>
            </>}
            buttonName="Login"
            onClick={() => onSubmit()}
        >
        </AuthLayout>

    </>)
}