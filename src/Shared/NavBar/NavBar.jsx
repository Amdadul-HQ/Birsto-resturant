import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/ContextComponent";
import toast from "react-hot-toast";
import useCart from "../../Hooks/useCart";

const NavBar = () => {

    const[cart] = useCart()
    const {user,logOut} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
        .then(()=> {
            toast.success('Log Out Successfully')
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <header className="text-white mx-auto">
            <nav className="w-full mx-auto font-inter px-5 bg-[rgba(21,21,21,0.50)] py-2 fixed z-10 flex items-center justify-between ">
                <h1 className="text-4xl leading-none">BISTRO BOSS <br /><span className="text-xl tracking-[11px] mt-0">RESTAURANT</span></h1>
                <div className="flex items-center">
                    <ul className="space-x-5 text-xl font-bold">
                        <NavLink to='/' >HOME</NavLink>
                        <NavLink to='/contact'>CONTACT US</NavLink>
                        <NavLink to='/dashboard'>DASHBOARD</NavLink>
                        <NavLink to='/ourmenu'>OUR MENU</NavLink>
                        <NavLink to='/order/salad'>OUR SHOP</NavLink>
                    </ul>
                    <div className="flex items-center gap-x-5 ml-5 space-x-3 text-xl font-bold">
                        <NavLink to='/dashboard/cart' className='flex items-center bg-green-600 p-2 rounded-full relative'><FaCartShopping /><span className="text-base font-semibold bg-blue-600 px-1 rounded-full ml-1">+{cart?.length}</span> </NavLink>
                        {
                            user ? <><button onClick={handleLogOut} className=''>Logout </button> <Link to='/profile'>
                                    <img className="w-10 h-10 rounded-full p-1 border" src={user?.photoURL}></img>
                                </Link></> : <NavLink to='/login' className='flex items-center gap-x-2'>SIGN IN<FaUserCircle /></NavLink>
                        }
                    </div>
                </div>

            </nav>
        </header>
    );
};

export default NavBar;