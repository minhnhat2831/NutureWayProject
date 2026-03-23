import AuthLayout from "../components/layout/AuthLayout";
import { InputForm } from "@/components/form/InputForm";
import { DatePickerForm } from "@/components/form/DatePickerForm";
import { SelectForm } from "@/components/form/SelectForm";
import useAuth from "../hooks/useAuth";
import { useOnboardingStore } from "../store/useOnboardingStore";
import { useEffect } from "react";

const ADDRESS_OPTION = [
    { value : '675966dc-0614-cc23-63b9-c26e338a492d' , label : '228 Lennox Street'},
    { value : '675966dc-0614-cc23-63b9-c26e338a492d' , label : '30/5 ohio Street'},
]

export default function RegisterPage() {
    const { useRegisterDetail } = useAuth()
    const { handleRegisterDetail, method } = useRegisterDetail()
    const { registerData } = useOnboardingStore()

    useEffect(() => {
        method.setValue('firstName', registerData?.firstName ?? '')
        method.setValue('lastName', registerData?.lastName ?? '')
        method.setValue('middleName', registerData?.middleName ?? '')
        method.setValue('birthDate', registerData?.birthDate ?? '')
        method.setValue('addressId', registerData?.addressId ?? '')
    },[method.setValue])
    return (<>
        <AuthLayout
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
                    name="birthDate"
                    label="Birthday"
                    required
                />
                <SelectForm 
                    name="addressId"
                    label="Address"
                    required
                    options={ADDRESS_OPTION}
                />
                <p className="text-[10px]">Your address helps us find doulas near you</p>
            </>}
            buttonName="Next"
            onClick={() => handleRegisterDetail()}
        />
    </>)
}