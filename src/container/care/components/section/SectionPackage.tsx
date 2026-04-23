import ImageField from "@/components/common/ImageField";
import { InputForm } from "@/components/form/InputForm";
import { useFormContext } from "react-hook-form";

export default function SectionPackage() {
    const { control, formState: { errors }, getValues } = useFormContext()
    const img = getValues('image')
    return (<>
        <div className="relative w-full bg-gray-200 rounded-2xl mb-4">
            <label className="flex flex-col justify-center items-center cursor-pointer overflow-hidden h-50 rounded-2xl relative w-full bg-gray-200">
                <ImageField
                    placeHolder="Click here to upload a cover photo"
                    control={control}
                    defaultImage={img ?? ''}
                    error={errors?.image?.message as string}
                    name="image"
                />
            </label>
        </div >
        <InputForm
            name="name"
            insideLabel="Package Name"
            placeholder="What is this name of this package"
        />
        <InputForm
            name="shortDescription"
            insideLabel="Short description"
            placeholder="Tell us about this package"
        />
    </>)
}