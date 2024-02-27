import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Cart from './pages/Cart/Cart';
import Menu from './pages/Menu/Menu';
import Error from './pages/Error/Error';
import Layout from './layout/Layout/Layout';
import Product from './pages/Product/Product';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
     children: [
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '*',
        element: <Error /> // сделать страницу ошибки 
      },
      {
        path: '/product/:id',
        element: <Product /> // page product
      },
    ]
  },
 
  
]); 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
    
  </React.StrictMode>,
)
