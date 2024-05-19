import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/HomePage/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([{
    path:'/',
    element:<MainLayout/>,
    errorElement:<ErrorPage/>,
    children:[
        {
        path:'/',
        element:<Home/>
        },
        {
        path:'/ourmenu',
        element:<OurMenu/>
        },
        {
        path:'/order/:category',
        element:<Order/>
        },
        {
        path:'/login',
        element:<Login/>
        },
        {
        path:'/signup',
        element:<SignUp/>
        }

    ]
}])

export default router