import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text' | 'inverse' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer";

  const sizeStyles = {
    sm: "text-body-s px-4 h-10 gap-2 rounded-[2px]",
    md: "text-body-m px-6 h-12 gap-2.5 rounded-[2px]",
    lg: "text-body-m px-8 h-14 gap-3 rounded-[2px]",
  };

  const variantStyles = {
    primary: "bg-accent-primary text-text-inverse hover:bg-interactive-hover active:bg-interactive-active shadow-subtle hover:shadow-medium hover:-translate-y-0.5",
    secondary: "border border-border-default bg-surface-primary text-text-primary hover:border-accent-primary hover:text-accent-primary hover:-translate-y-0.5 shadow-subtle font-medium",
    text: "text-text-primary hover:text-accent-primary p-0 h-auto underline-offset-4 hover:underline font-medium",
    inverse: "bg-background-inverse text-text-inverse hover:bg-interactive-hover hover:-translate-y-0.5",
    icon: "p-2.5 h-11 w-11 rounded-full border border-border-default hover:border-accent-primary text-text-primary hover:text-accent-primary",
  };

  return (
    <button
      className={`${baseStyles} ${variant === 'text' || variant === 'icon' ? '' : sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          {leftIcon && <span className="transition-transform group-hover:-translate-x-0.5">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="transition-transform group-hover:translate-x-0.5">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};
