
import { FaCalendar, FaHome } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { GoCommentDiscussion } from "react-icons/go";
import { HiCreditCard } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import { MdEditCalendar, MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

const DashBoardMenu = () => {
    return (
        <div className="text-[#151515] px-6 my-5">
            <div className="w-fit">
                <h1 className="text-2xl font-bold">BISTRO BOSS</h1>
                <p className="text-lg font-semibold">Restaurant</p>
            </div>
            <ul className="mt-16 space-y-4">
                <NavLink className='flex items-center gap-x-2'><FaHome/> User Home</NavLink>
                <NavLink className='flex items-center gap-x-2'><FaCalendar/> Reservation</NavLink>
                <NavLink className='flex items-center gap-x-2'><HiCreditCard /> Payment History</NavLink>
                <NavLink to='/dashboard/cart' className='flex items-center gap-x-2'><FaCartShopping/> My Cart</NavLink>
                <NavLink className='flex items-center gap-x-2'><GoCommentDiscussion /> Add Review</NavLink>
                <NavLink className='flex items-center gap-x-2'><MdEditCalendar /> My Booking</NavLink>
            </ul>
            <div className="w-10/12 mx-auto my-10">
                <hr />
            </div>
            <ul className="mt-16 space-y-4">
                <NavLink to='/' className='flex items-center gap-x-2'><FaHome/> Home</NavLink>
                <NavLink to='/order/salad' className='flex items-center gap-x-2'><FaCartShopping/> Shop</NavLink>
                <NavLink to='/ourmenu' className='flex items-center gap-x-2'><IoMenu /> Menu</NavLink>
                <NavLink className='flex items-center gap-x-2'><MdEmail /> My Contact</NavLink>
            </ul>
        </div>
    );
};

export default DashBoardMenu;