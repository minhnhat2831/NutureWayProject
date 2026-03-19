import { forwardRef, type TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export interface BaseTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
  labelClassName?: string;
  required?: boolean;
}

export const TextAreaField = forwardRef<HTMLTextAreaElement, BaseTextAreaProps>(
  (
    {
      label,
      error,
      className,
      containerClassName,
      labelClassName,
      required,
      disabled,
      rows = 4,
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
        <textarea
          ref={ref}
          rows={rows}
          disabled={disabled}
          className={cn(
            'w-full px-3 py-2.5 border rounded-lg text-sm outline-none transition-all resize-vertical font-serif',
            'text-gray-900 placeholder:text-gray-400',
            'focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
            error
              ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
              : 'border-gray-300 hover:border-gray-400',
            disabled && 'bg-gray-50 cursor-not-allowed opacity-60',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-red-500 font-serif">{error}</p>}
      </div>
    );
  }
);