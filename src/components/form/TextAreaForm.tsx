import { Controller, useFormContext, type FieldValues, type Path } from "react-hook-form";
import { TextAreaField, type BaseTextAreaProps } from "../common/TextAreaField";

type FormFieldBase<T extends FieldValues> = {
  name: Path<T>;
};

type FormTextAreaProps<T extends FieldValues> = FormFieldBase<T> &
  Omit<BaseTextAreaProps, 'error' | 'name'>;

export function TextAreaForm<T extends FieldValues>({
  name,
  ...props
}: FormTextAreaProps<T>) {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextAreaField
          {...field}
          error={fieldState.error?.message}
          {...props}
        />
      )}
    />
  );
}