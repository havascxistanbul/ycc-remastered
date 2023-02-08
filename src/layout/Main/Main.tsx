import React from 'react';
import './styles.scss';

interface LayoutProps {
  children: React.ReactNode
}

function Main ({ children }: LayoutProps): JSX.Element {
  return <main className="container">{children}</main>;
}

export default Main;
