import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Fixed/Root';
import ErrorPage from './Fixed/Error';
import Home from './Pages/Home';
import LoginPage from './Pages/Login';
import SignupPage from './Pages/Signup';
import AuthProvider from './Providers/AuthProvider';
import PrivetRought from './Privet/PrivetRought';
import Product from './Pages/Product';
import Profile from './Pages/Profile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>
      },
      {
        path: "/signup",
        element: <SignupPage></SignupPage>
      },
      {
        path: '/products',
        element: <PrivetRought>
          <Product></Product>
        </PrivetRought>
      },
      {
        path: '/profile',
        element: <PrivetRought>
          <Profile></Profile>
        </PrivetRought>
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
