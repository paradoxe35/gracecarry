import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      fullWidth = true,
      leftIcon,
      rightIcon,
      className = '',
      containerClassName = '',
      ...props
    },
    ref
  ) => {
    // Base input classes
    const baseInputClasses = 'px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200';
    
    // Error state classes
    const errorClasses = error
      ? 'border-error focus:ring-error'
      : 'border-neutral-300';
    
    // Icon padding classes
    const leftPaddingClass = leftIcon ? 'pl-10' : '';
    const rightPaddingClass = rightIcon ? 'pr-10' : '';
    
    // Width class
    const widthClass = fullWidth ? 'w-full' : '';
    
    // Combine all input classes
    const inputClasses = `${baseInputClasses} ${errorClasses} ${leftPaddingClass} ${rightPaddingClass} ${widthClass} ${className}`;
    
    return (
      <div className={`${fullWidth ? 'w-full' : ''} ${containerClassName}`}>
        {label && (
          <label className="block text-neutral-800 font-medium mb-1 text-sm">
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500">
              {leftIcon}
            </div>
          )}
          
          <input ref={ref} className={inputClasses} {...props} />
          
          {rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500">
              {rightIcon}
            </div>
          )}
        </div>
        
        {(helperText || error) && (
          <p className={`mt-1 text-sm ${error ? 'text-error' : 'text-neutral-600'}`}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;