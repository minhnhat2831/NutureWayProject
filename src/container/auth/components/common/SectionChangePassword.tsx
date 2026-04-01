import { InputForm } from "@/components/form/InputForm";

export default function SectionChangePassword() {
    return (<>
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
    </>)
}