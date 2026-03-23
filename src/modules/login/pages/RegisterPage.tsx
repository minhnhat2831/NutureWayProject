import { useForm } from "react-hook-form";
import LoginLayout from "../components/LoginLayout";
import { InputForm } from "@/components/form/InputForm";
import { DatePickerForm } from "@/components/form/DatePickerForm";
import { SelectForm } from "@/components/form/SelectForm";
import { useNavigate } from "react-router";

const ADDRESS_OPTION = [
    { value : '228 Lennox Street' , label : '228 Lennox Street'},
    { value : '30/5 ohio Street' , label : '30/5 ohio Street'},
]

export default function RegisterPage() {
    const method = useForm()
    const nav = useNavigate()

    const handleSubmit = () => {
        nav('/select-identity')
    }

    return (<>
        <LoginLayout
            method={method}
            title="Your details"
            subTitle="Welcome to NurtureWave! Tell us a bit more about yourself!"
            children={<>
                <InputForm
                    name="firstName"
                    label="First Name"
                    placeholder="First Name"
                    required
                />
                <InputForm
                    name="middleName"
                    label="Middle Name(optional)"
                    placeholder="Middle Name"
                />
                <InputForm
                    name="lastName"
                    label="Last Name"
                    placeholder="Last Name"
                    required
                />
                <DatePickerForm
                    name="dateOfBirth"
                    label="Birthday"
                    required
                />
                <SelectForm 
                    name="address"
                    label="Address"
                    required
                    options={ADDRESS_OPTION}
                />
                <p className="text-[10px]">Your address helps us find doulas near you</p>
            </>}
            buttonName="Next"
            onClick={() => handleSubmit()}
        />
    </>)
}