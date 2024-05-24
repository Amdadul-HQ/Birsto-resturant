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
import DashBoard from "../Layout/DashBoard/DashBoard";
import DashBoardCart from "../Pages/DashBoardPage/DashBoardCart/DashBoardCart";
import AllUser from "../Pages/DashBoardPage/AllUsers/AllUser";
import AddItems from "../Pages/DashBoardPage/AddItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../Pages/DashBoardPage/ManageItems/ManageItems";

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
    ]    
},
{
    path:'/dashboard',
    element:<PrivateRoutes><DashBoard/></PrivateRoutes>,
    children:[
        {
        path:'/dashboard/cart',
        element:<DashBoardCart/>
        },




        // Admin routes
        {
        path:'/dashboard/alluser',
        element:<AdminRoutes><AllUser/></AdminRoutes>
        },
        {
        path:'/dashboard/additems',
        element:<AdminRoutes><AddItems/></AdminRoutes>
        },
        {
         path:'/dashboard/manageitems',
         element:<ManageItems/>
        }
]
}

])

export default router