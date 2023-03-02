import React from 'react';
import './styles.scss';

interface ContentChildren {
  children: React.ReactNode;
}

function Content({ children }: ContentChildren): JSX.Element {
  return <section className="content">{children}</section>;
}

export default Content;
