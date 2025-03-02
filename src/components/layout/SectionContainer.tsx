
import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: keyof JSX.IntrinsicElements;
}

const SectionContainer = ({
  children,
  className = '',
  id,
  as: Component = 'section',
}: SectionContainerProps) => {
  return (
    <Component 
      id={id}
      className={`py-16 px-4 md:px-8 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </Component>
  );
};

export default SectionContainer;
