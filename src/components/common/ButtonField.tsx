import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';
import { Icons } from './Icons';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
}

const variantStyles = {
  primary: 'bg-violet-900 text-white hover:bg-violet-700 focus:ring-violet-500 disabled:bg-violet-400',
  secondary: 'bg-white text-black hover:bg-gray-400 focus:ring-blue-400 disabled:bg-blue-400',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 disabled:bg-red-400',
  ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
};

const sizeStyles = {
  sm: 'px-3 py-1.5 p-1 text-sm',
  md: 'px-4 py-2 p-3 text-sm',
  lg: 'px-6 py-3 p-4 text-base',
};

export const ButtonField = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
      children,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-medium rounded-lg font-serif',
          'transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
          'cursor-pointer disabled:cursor-not-allowed disabled:opacity-60',
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {loading && (
          <Icons.buttonIcon />
        )}
        {children}
      </button>
    );
  }
);