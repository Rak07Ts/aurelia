import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'default' | 'wide' | 'reading' | 'full';
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'default',
  className = '',
}) => {
  const sizeClasses = {
    default: 'max-w-[1440px]',
    wide: 'max-w-[1600px]',
    reading: 'max-w-[760px]',
    full: 'max-w-none',
  };

  return (
    <div
      className={`w-full mx-auto px-5 sm:px-8 md:px-12 ${sizeClasses[size]} ${className}`}
    >
      {children}
    </div>
  );
};
