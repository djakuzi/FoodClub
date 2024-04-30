import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';
import './index.css'
import Cart from './pages/Cart/Cart';
import ErrorPage from './pages/Error/Error';
import Layout from './layout/Layout/Layout';
import Product from './pages/Product/Product';
import axios from 'axios';
import { PREFIX } from './helper/APi';
import AuthLayout from './layout/Auth/AuthLayout';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
// import falseLoading from "./data/data"

const Menu = lazy(()=> import('./pages/Menu/Menu')) 

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
     children: [
      {
        path: '/menu',
        element: <Suspense fallback={<>Загрузка...</>}> <Menu /> </Suspense>
      },
      {
        path: '/cart',
        element: <Cart />
      },
       {
        path: '*',
        element: <ErrorPage /> // сделать страницу ошибки 
      },
      {
        path: '/product/:id', // page product
        element: <Product />,
        errorElement:<>error</>,
        loader: async ({params}) => {
          
          return defer({
            data: axios.get(PREFIX + '/products/' + params.id).then( data => data)
          })
          // await new Promise<void>((resolve) => {
          //       setTimeout(()=>{
          //           resolve()
          //       }, 1000)
          //   })
          // const {data} = await axios.get(PREFIX + '/products/' + params.id)
          // return data;
        }
      },
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />
      },
       {
        path: "register",
        element: <Register />
      },
       {
        path: '*',
        element: <ErrorPage /> // сделать страницу ошибки 
      },
    ]
  },

  
]); 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
