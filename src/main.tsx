import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import { BrowserRouter } from 'react-router-dom';
import { AnimatedRoutes, Navbar } from './components';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);
