import LocalizedLink from "@/components/ui/LocalizedLink";

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  fullWidth = false,
  className = '',
  type = 'button',
  disabled = false,
  onClick,
}: ButtonProps) => {
  // Base classes
  const baseClasses = 'rounded-md font-medium transition-colors duration-300 inline-flex items-center justify-center';
  
  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'bg-secondary text-neutral-800 hover:bg-secondary-dark border border-neutral-300',
    outline: 'bg-transparent text-primary border border-primary hover:bg-primary/5',
    text: 'bg-transparent text-primary hover:bg-primary/5 px-2',
    neutral: 'bg-neutral-900 text-white px-6 py-3 rounded-r-md hover:bg-neutral-800 transition-colors'
  };


  // Disabled classes
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  // Full width class
  const widthClass = fullWidth ? 'w-full' : '';
  
  // Combine all classes
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${widthClass} ${className}`;
  
  // If href is provided, render as Link
  if (href) {
    return (
      <LocalizedLink 
        href={href} 
        className={classes}
        onClick={onClick as any}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
      >
        {children}
      </LocalizedLink>
    );
  }
  
  // Otherwise render as button
  return (
    <button 
      type={type} 
      className={classes} 
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;