import { cn } from "@/lib/cn"
import { Controller, useFormContext } from "react-hook-form"
import { NumericFormat } from "react-number-format"

interface FormControler {
    name: string
    label: string
    error?: string;
    containerClassName?: string;
    labelClassName?: string;
    required?: boolean;
}

export const NumberFormatInput = ({
    name,
    label,
    error,
    containerClassName,
    labelClassName,
    required,
    ...props
}: FormControler) => {
    const { control } = useFormContext()
    return (
        <>
            {label && (
                <label className={cn('block text-sm font-medium text-gray-700 mb-1.5', labelClassName)}>
                    {label}
                    {required && <span className="text-red-500 ml-0.5">*</span>}
                </label>
            )}
            <Controller
                name={name}
                control={control}
                render={({ field, fieldState }) => (
                    <>
                        <div className="flex items-center gap-2">
                            <NumericFormat
                                {...props}
                                value={field.value ?? ""}
                                thousandSeparator=","
                                decimalSeparator="."
                                decimalScale={2}
                                fixedDecimalScale
                                allowNegative={false}
                                placeholder="0.00"
                            />
                            <span className="text-sm font-medium text-gray-600 shrink-0">%</span>
                        </div>
                        {fieldState.error && (
                            <p className="mt-1 text-xs text-red-500">{fieldState.error.message}</p>
                        )}
                    </>
                )}
            />
        </>
    )
}