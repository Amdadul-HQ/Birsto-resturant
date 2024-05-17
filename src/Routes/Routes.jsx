import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/HomePage/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";

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
        }
    ]
}])

export default router