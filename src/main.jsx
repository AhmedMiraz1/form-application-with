import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Register from './components/Register';
import AuthProvider from './Provider/AuthProvider';
import Orders from './components/Orders';
import PrivetRoute from './routes/PrivetRoute';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:<LogIn/>
      },
       {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/orders',
        element:<PrivetRoute><Orders> </Orders></PrivetRoute>
      },
      {
        path:'/profile',
        element:<PrivetRoute><Profile> </Profile></PrivetRoute>
      },
      {
        path:'/dashboard',
        element:<PrivetRoute><Dashboard> </Dashboard></PrivetRoute>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
