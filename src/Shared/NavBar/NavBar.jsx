import { FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <header className="text-white mx-auto">
            <nav className="w-full mx-auto font-inter px-5 bg-[rgba(21,21,21,0.50)] py-2 fixed z-10 flex items-center justify-between ">
                <h1 className="text-4xl leading-none">BISTRO BOSS <br /><span className="text-xl tracking-[11px] mt-0">RESTAURANT</span></h1>
                <div className="flex items-center">
                    <ul className="space-x-5 text-xl font-bold">
                        <NavLink>HOME</NavLink>
                        <NavLink>CONTACT US</NavLink>
                        <NavLink>DASHBOARD</NavLink>
                        <NavLink>OUR MENU</NavLink>
                        <NavLink>OUR SHOP</NavLink>
                    </ul>
                    <div className="flex items-center gap-x-5 ml-5 space-x-5 text-xl font-bold">
                        <NavLink><FaCartShopping /></NavLink>
                        <NavLink className='flex items-center gap-x-2'>SIGN IN<FaUserCircle /></NavLink>
                    </div>
                </div>

            </nav>
        </header>
    );
};

export default NavBar;