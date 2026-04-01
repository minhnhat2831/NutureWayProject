import { InputForm } from "@/components/form/InputForm";

export default function SectionForgotPassword() {
    return (<>
        <InputForm
            name="email"
            label="Email"
            placeholder="Email"
            required>
        </InputForm>
    </>)
}