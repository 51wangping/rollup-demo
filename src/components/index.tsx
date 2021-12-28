import React from 'react';

interface IProps {
  children: React.ReactNode;
  className?: string;
}
const Swtch: React.FC<IProps> = ({ className, children }) => {
  return <div className={className
  }>
    {children}
  </div>
}

export default Swtch;