import { Controller, useFormContext, type FieldValues, type Path } from "react-hook-form";
import { SelectField, type BaseSelectProps } from "../common/SelectField";

type FormControler<T extends FieldValues> = {
  name: Path<T>;
};

type FormSelectProps<T extends FieldValues> = FormControler<T> &
  Omit<BaseSelectProps, 'error' | 'name'>;

export function SelectForm<T extends FieldValues>({
  name,
  ...props
}: FormSelectProps<T>) {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <SelectField
          {...props}
          name={field.name}
          value={field.value}
          onChange={(value) => field.onChange(value)}
          onBlur={field.onBlur}
          error={fieldState.error?.message}
        />
      )}
    />
  );
}