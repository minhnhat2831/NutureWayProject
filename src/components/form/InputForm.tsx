import { useFormContext, Controller, type FieldValues, type Path } from 'react-hook-form'
import { InputField, type BaseInputProps } from '../common/InputField';

type FormControler<T extends FieldValues> = {
    name: Path<T>;
    type?: string
};

type FormInputProps<T extends FieldValues> = FormControler<T> &
    Omit<BaseInputProps, 'error' | 'name'>;


export function InputForm<T extends FieldValues>({
    name,
    type = 'text',
    ...rest
}: FormInputProps<T>) {
    const { control } = useFormContext<T>();
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <InputField
                    {...field}
                    type={type}
                    onChange={(e) => {
                        const value = e.target.value;
                        field.onChange(
                            type === 'number' && value !== '' ? Number(value) : value
                        );
                    }}
                    error={fieldState.error?.message}
                    {...rest}
                />
            )}
        ></Controller>
    )
}