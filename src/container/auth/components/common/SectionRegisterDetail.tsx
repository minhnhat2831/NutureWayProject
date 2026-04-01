import { DatePickerForm } from "@/components/form/DatePickerForm";
import { InputForm } from "@/components/form/InputForm";
import { SelectForm } from "@/components/form/SelectForm";

const ADDRESS_OPTION = [
    { value: '675966dc-0614-cc23-63b9-c26e338a492d', label: '228 Lennox Street' },
    { value: '2a7b8f97-cbad-c343-5524-c3fdd9ea59e4', label: '30/5 ohio Street' },
]

export default function SectionRegisterDetail() {
    return (<>
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
            placeholder="Select Status"
            options={ADDRESS_OPTION}
        />
        <p className="text-[10px]">Your address helps us find doulas near you</p>
    </>)
}