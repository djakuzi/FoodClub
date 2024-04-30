import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';
import './index.css'
import Cart from './pages/Cart/Cart';
import Error from './pages/Error/Error';
import Layout from './layout/Layout/Layout';
import Product from './pages/Product/Product';
import axios from 'axios';
import { PREFIX } from './helper/APi';
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
        element: <Error /> // сделать страницу ошибки 
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
 
  
]); 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
