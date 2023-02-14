import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage, AboutUsPage, ProcessPage, FAQ } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about-us',
    element: <AboutUsPage />,
  },
  {
    path: '/faq',
    element: <FAQ />,
  },
  {
    path: '/process',
    element: <ProcessPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={router} />);
