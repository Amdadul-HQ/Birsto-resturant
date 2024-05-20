import { Outlet } from "react-router-dom";
import DashBoardMenu from "../../Pages/DashBoardPage/DashBoardMenu";
import { Toaster } from "react-hot-toast";

const DashBoard = () => {
    return (
        <section className="flex ">
            <div className="w-72 bg-[#D1A054] min-h-screen">
                <DashBoardMenu/>
            </div>  
            <div className="w-full">
                <Outlet/>
            </div>  
            <Toaster />
        </section>
    );
};

export default DashBoard;