import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export interface BaseDatePickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  required?: boolean;
  containerClassName?: string;
}

export const DatePickerField = forwardRef<HTMLInputElement, BaseDatePickerProps>(
  ({ label, error, required, className, containerClassName, ...props }, ref) => {
    return (
      <div className={cn('w-full', containerClassName)}>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1.5 font-serif">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          <input
            ref={ref}
            type="date"
            className={cn(
              'w-full px-3 py-2 border rounded-lg text-sm transition-colors font-serif',
              'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
              'disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed',
              error
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 hover:border-gray-400',
              className
            )}
            {...props}
          />
        </div>

        {error && <p className="mt-1.5 text-sm text-red-600 font-serif">{error}</p>}
      </div>
    );
  }
);