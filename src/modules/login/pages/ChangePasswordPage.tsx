import { InputForm } from "@/components/form/InputForm"
import { useForm } from "react-hook-form"
import { useLocation, useNavigate } from "react-router"
import LoginLayout from "../components/LoginLayout"
import { useState } from "react"

export default function ChangePasswordPage() {
    const method = useForm()
    const nav = useNavigate()
    const location = useLocation();
    const from = location.state?.from
    const [success, isSuccess] = useState(false)
    const button = from === 'login'
        ? 'Next'
        : 'Update Password';

    const title = from === 'login'
        ? 'Create a password'
        : 'Set a new password';

    const handlePassword = () => {
        if (from === 'login') {
            nav('/register')
        } else if (from === 'forgot-password') {
            isSuccess(true)
        }
    }

    return (<>
        {success === false && <>
            <LoginLayout
                method={method}
                title={title}
                subTitle="Create a new password. Ensure it differs from previous ones for sercurity"
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
                        name="comfirmedPassword"
                        label="Comfirmed Password"
                        required
                        placeholder="Comfirmed Password">
                    </InputForm>
                </>}
                buttonName={button}
                onClick={() => handlePassword()}
            >
            </LoginLayout>
        </>}


        {success && <>
            <LoginLayout
                method={method}
                title="Password update"
                subTitle="Your password has been updated"
                children={<></>}
                buttonName="Login"
                onClick={() => nav('/login')}
            >
            </LoginLayout>
        </>}
    </>)
}