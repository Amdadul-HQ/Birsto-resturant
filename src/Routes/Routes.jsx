import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/HomePage/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Profile from "../Pages/Profile/Profile";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../Pages/DashBoard/DashBoard";

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
        },
        {
        path:'/profile',
        element:<PrivateRoutes><Profile/></PrivateRoutes>
        },
        {
        path:'dashboard',
        element:<PrivateRoutes><DashBoard/></PrivateRoutes>
        }

    ]
}])

export default router