import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    const location = useLocation()
    const isShowNavBarFooter = location.pathname === '/login' || location.pathname === '/signup'

    return (
        <>
            {isShowNavBarFooter || <NavBar/>}
            <Outlet/>            
            <Toaster />
        </>
    );
};

export default MainLayout;