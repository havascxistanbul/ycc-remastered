import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={router} />);
