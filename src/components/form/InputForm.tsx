import { useFormContext, Controller } from 'react-hook-form'
import { InputField } from '../common/InputField';

interface FormControler {
    name: string,
    type?: string
}

export function InputForm({
    name,
    type = 'text',
    ...rest
}: FormControler) {
    const { control } = useFormContext();
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <InputField
                    {...field}
                    type={type}
                    onChange={(e) => {
                        const value = e.target.value
                        field.onChange(value === '' ? undefined : (type === 'number' ? Number(value) : value))
                    }}
                    error={fieldState.error?.message}
                    {...rest}
                />
            )}
        ></Controller>
    )
}