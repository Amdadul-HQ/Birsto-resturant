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
import Updateitem from "../Pages/DashBoardPage/UpdateItem/Updateitem";
import Payment from "../Pages/DashBoardPage/Payment/Payment";
import PaymentHistory from "../Pages/DashBoardPage/Payment/PaymentHistory";
import AdminHome from "../Pages/DashBoardPage/Admin/AdminHome/AdminHome";
import UserHome from "../Pages/DashBoardPage/User/UserHome/UserHome";

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
        {
         path:'/dashboard/payment',
         element:<Payment/>
        },
        {
        path:'/dashboard/paymenthistory',
        element:<PaymentHistory/>
        },
        {
        path:'/dashboard/userhome',
        element:<UserHome/>
        },
        



        // Admin routes
        {
        path:'/dashboard/adminhome',
        element:<AdminHome/>
        },
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
        },
        {
         path:'/dashboard/update/:id',
         element:<Updateitem/>,
         loader:async({params}) => await fetch(`http://localhost:5000/menu/${params.id}`)
        }
]
}

])

export default router