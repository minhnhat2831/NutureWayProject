import { InputForm } from "@/components/form/InputForm"
import { useLocation, useNavigate } from "react-router"
import AuthLayout from "../components/layout/AuthLayout"
import useAuth from "../hooks/useAuth"

export default function ChangePasswordPage() {
    const { verifyPassword } = useAuth()
    const { handlePassword, loading, method, success, handleResetPassword } = verifyPassword()
    const nav = useNavigate()
    const location = useLocation();
    const from = location.state?.from

    const button = from === 'register'
        ? 'Next'
        : 'Update Password';

    const title = from === 'register'
        ? 'Create a password'
        : 'Set a new password';

    const subTitle = from === 'register'
        ? "Thank you for verifying your email. Now let's create a password for your account"
        : 'Create a new password. Ensure it differs from previous ones for sercurity'

    return (<>
        {success === false && <>
            <AuthLayout
                method={method}
                title={title}
                subTitle={subTitle}
                disable={loading}
                children={<>
                    <InputForm
                        type="password"
                        name="password"
                        label="Password"
                        placeholder="Password"
                        required>
                    </InputForm>
                    <InputForm
                        type="password"
                        name="confirmPassword"
                        label="Comfirm Password"
                        required
                        placeholder="Comfirm Password">
                    </InputForm>
                </>}
                buttonName={button}
                onClick={() => { from === 'register' ? handlePassword() : handleResetPassword() }}
            >
            </AuthLayout>
        </>}


        {success && <>
            <AuthLayout
                method={method}
                title="Password update"
                subTitle="Your password has been updated"
                children={<></>}
                buttonName="Login"
                onClick={() => nav('/login')}
            >
            </AuthLayout>
        </>}
    </>)
}