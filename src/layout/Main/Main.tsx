import React from 'react';
import './styles.scss';

interface LayoutProps {
  children: React.ReactNode;
}

function Main({ children }: LayoutProps): JSX.Element {
  return <main>{children}</main>;
}

export default Main;
