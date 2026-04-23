import { useFieldArray, useFormContext } from "react-hook-form";
import { ButtonField } from "@/components/common/ButtonField";
import { InputForm } from "@/components/form/InputForm";

export default function SectionQuantification() {
    const { control } = useFormContext()
    const { fields, append, remove } = useFieldArray({
        name: "qualifications",
        control
    });
    return (<>
        {fields.map((field, index) => (<>
            <div className="flex" key={field.id}>
                <InputForm
                    name={`qualifications.${index}.value`}
                    insideLabel={`Quanlification ${index + 1}`}
                    placeholder="Your quanlifications"
                />
                <ButtonField
                    variant="ghost"
                    onClick={() => remove(index)}
                >X</ButtonField>
            </div>
        </>))}
        <ButtonField
            variant="secondary"
            className="justify-start"
            onClick={() => { append({ value: '' }) }}
        >+ Input quantifications</ButtonField>
    </>)
}