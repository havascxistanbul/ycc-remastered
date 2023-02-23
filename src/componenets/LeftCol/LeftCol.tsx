import React from 'react';
import './styles.scss';

interface LeftColProps {
  children: React.ReactNode;
}

function LeftCol({ children }: LeftColProps): JSX.Element {
  return (
    <div className="left-col">
      {children}
    </div>
  );
}

export default LeftCol;
