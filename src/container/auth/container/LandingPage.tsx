import { ButtonField } from "@/components/common/ButtonField";
import { Icons } from "@/components/common/Icons";
import { InputForm } from "@/components/form/InputForm";
import { FormProvider } from "react-hook-form";
import useFormCheckEmail from "../hooks/useFormCheckEmail";
import { useNavigate } from "react-router";

export default function LandingPageContainer() {
    const { method, checkEmail, isLoading } = useFormCheckEmail()
    const nav = useNavigate()

    const useCheckEmail = async () => {
        const email = method.getValues("email")

        const result = await checkEmail(email)

        if (result?.data === true) {
            nav('/login')
        } else if (result?.data === false) {
            nav('/register',{ state: { from: "register" } })
        }
    }
    return (<>
        <FormProvider {...method}>
            <div className="h-screen flex justify-end flex-col items-center bg-[url(/bg.jpg)] bg-cover bg-center">
                <div className="w-full flex-col flex items-center justify-center py-9">
                    <h1 className="text-white font-bold font-serif text-2xl cursor-default tracking-wider">Empowering life's journey</h1>
                    <h3 className="text-gray-100 font-medium font-serif text-md cursor-default tracking-wider">Connecting you to doulas</h3>
                </div>
                <div className="bg-gray-300 w-full h-auto rounded-2xl">
                    <form onSubmit={method.handleSubmit(useCheckEmail)} className="flex-1 flex-col flex px-4 py-7 gap-4">
                        <div className="py-1 text-left">
                            <p className="text-2xl font-serif font-bold cursor-default tracking-normal">NutureWave</p>
                            <small className="text-sm font-serif cursor-default tracking-tight">Hi! Let's get you started!</small>
                        </div>

                        <InputForm
                            name="email"
                            placeholder="Email"
                            disabled={isLoading}
                            required
                        >
                        </InputForm>
                        <ButtonField
                            disabled={isLoading}
                            type="submit"
                            fullWidth
                        >
                            {isLoading ? "Checking..." : "Continue"}
                        </ButtonField>

                        <hr className="bg-gray-300 h-1 w-full px-4" />
                        <ButtonField
                            variant="secondary"
                            type="button">
                            Continue with Apple</ButtonField>
                        <ButtonField
                            variant="secondary"
                            type="button">
                            <Icons.googleIcon />Continue with Google</ButtonField>
                        <p className="px-4 text-center text-sm overflow-hidden font-serif">By continuing, you acknowledge that you have read and agreed to our <span className="text-blue-700 font-bold underline cursor-pointer"> Terms and Conditions</span> and <span className="text-blue-700 font-bold underline cursor-pointer">Privacy Statement</span></p>
                    </form>
                </div>
            </div>
        </FormProvider>
    </>)
}