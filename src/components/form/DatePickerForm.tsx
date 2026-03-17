import { Controller, useFormContext, type FieldValues, type Path } from "react-hook-form";
import { DatePickerField, type BaseDatePickerProps } from "../common/DatePickerField";

type FormFieldBase<T extends FieldValues> = {
  name: Path<T>;
};

type FormDatePickerProps<T extends FieldValues> = FormFieldBase<T> &
  Omit<BaseDatePickerProps, 'error' | 'name'>;
export function DatePickerForm<T extends FieldValues>({
  name,
  ...props
}: FormDatePickerProps<T>) {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <DatePickerField
          {...field}
          value={field.value || ''}
          error={fieldState.error?.message}
          {...props}
        />
      )}
    />
  );
}