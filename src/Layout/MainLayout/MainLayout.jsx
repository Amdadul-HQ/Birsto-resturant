import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";

const MainLayout = () => {
    const location = useLocation()
    const isShowNavBarFooter = location.pathname === '/login' || location.pathname === '/signup'

    return (
        <>
            {isShowNavBarFooter || <NavBar/>}
            <Outlet/>            
        </>
    );
};

export default MainLayout;