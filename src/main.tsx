import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import { BrowserRouter } from 'react-router-dom';
import { AnimatedRoutes, Navbar, MobileView } from './components';

function App(): JSX.Element {
  const [mobile, setMobile] = useState(false);
  const observer = new ResizeObserver((entry) => {
    const currentWidth = entry[0].target.clientWidth;
    if (currentWidth < 720) {
      console.log(currentWidth);
      setMobile(true);
    } else {
      setMobile(false);
    }
  });

  const rootElement = document.querySelector('#root');

  if (rootElement !== null) {
    observer.observe(rootElement);
  }

  return (
    <BrowserRouter>
      <Navbar />
      {mobile ? <MobileView /> : <AnimatedRoutes />}
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);
