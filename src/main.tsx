import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { RecoilRoot } from 'recoil';
import CartPage from './pages/CartPage/CartPage';
import OrderConfirmPage from './pages/OrderConfirmPage/OrderConfirmPage';
import PaymentConfirmPage from './pages/PaymentConfirmPage/PaymentConfirmPage';

import './index.css';

const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: CartPage,
    },
    {
      path: '/order-confirm',
      Component: OrderConfirmPage,
    },
    {
      path: '/payment-confirm',
      Component: PaymentConfirmPage,
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
);
