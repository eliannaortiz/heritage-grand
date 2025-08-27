import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      primary: 'bg-gradient-to-r from-[#8B1538] to-[#A61E4D] text-white hover:from-[#6B1028] hover:to-[#8B1538] focus:ring-[#8B1538] shadow-lg hover:shadow-xl transform hover:scale-105',
      secondary: 'bg-[#D4AF37] text-[#1F2937] hover:bg-[#B8860B] focus:ring-[#D4AF37] shadow-md hover:shadow-lg',
      outline: 'border-2 border-[#8B1538] text-[#8B1538] hover:bg-[#8B1538] hover:text-white focus:ring-[#8B1538]',
      ghost: 'text-[#8B1538] hover:bg-[#8B1538]/10 focus:ring-[#8B1538]/20'
    };
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };
    
    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };