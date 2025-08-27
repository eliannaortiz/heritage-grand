import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
}

const Card = ({ className, children, hover = false }: CardProps) => {
  return (
    <div 
      className={cn(
        'bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden heritage-paper-texture',
        hover && 'heritage-hover-lift cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div className={cn('p-6 pb-4', className)}>
      {children}
    </div>
  );
};

const CardContent = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div className={cn('p-6 pt-2', className)}>
      {children}
    </div>
  );
};

const CardFooter = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div className={cn('p-6 pt-4 border-t border-gray-100', className)}>
      {children}
    </div>
  );
};

export { Card, CardHeader, CardContent, CardFooter };