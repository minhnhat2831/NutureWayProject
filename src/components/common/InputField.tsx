import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  insideLabel? : string
  error?: string;
  helperText?: string;
  containerClassName?: string;
  labelClassName?: string;
  required?: boolean;
}

export const InputField = forwardRef<HTMLInputElement, BaseInputProps>(
  (
    {
      label,
      error,
      insideLabel,
      helperText,
      className,
      containerClassName,
      labelClassName,
      required,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn('w-full', containerClassName)}>
        {label && (
          <label className={cn('block text-sm font-medium text-gray-700 mb-1.5 font-serif', labelClassName)}>
            {label}
            {required && <span className="text-red-500 ml-0.5">*</span>}
          </label>
        )}
        {insideLabel && <label className={'absolute left-7 block text-[10px] font-medium text-gray-700 mb-1.5 font-serif'}>{insideLabel}</label>}
        <input
          ref={ref}
          disabled={disabled}
          className={cn(
            'w-full px-3 py-2.5 p-3 border rounded-lg text-sm outline-none transition-all bg-white font-serif',
            'text-gray-900 placeholder:text-gray-400',
            'focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-blue-50',
            error
              ? 'border-red-500 focus:ring-red-500 focus:border-red-500 focus:bg-red-50'
              : 'border-gray-600 hover:border-gray-900',
            disabled && 'bg-gray-50 cursor-not-allowed opacity-60',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        {helperText && !error && <p className="mt-1 text-xs text-gray-500 font-serif">{helperText}</p>}
      </div>
    );
  }
);