
import { FaBook, FaCalendar, FaHome, FaList,  FaUsers, FaUtensils } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { GoCommentDiscussion } from "react-icons/go";
import { HiCreditCard } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import { MdEditCalendar, MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

const DashBoardMenu = () => {
    const isAdmin = true
    return (
        <div className="text-[#151515] px-6 my-5">
            <div className="w-fit">
                <h1 className="text-2xl font-bold">BISTRO BOSS</h1>
                <p className="text-lg font-semibold">Restaurant</p>
            </div>
            {
                isAdmin ? <ul className="mt-16 space-y-4">
                <NavLink to='/dashboard/adminhome' className={({isActive})=> isActive ? 'text-white flex gap-x-2 items-center' : 'text-black flex gap-x-2 items-center'}><FaHome/>Admin Home</NavLink>
                <NavLink to='/dashboard/additems' className={({isActive})=> isActive ? 'text-white flex gap-x-2 items-center' : 'text-black flex gap-x-2 items-center'}><FaUtensils/>Add Items</NavLink>
                <NavLink to='/dashboard/manageitems' className={({isActive})=> isActive ? 'text-white flex gap-x-2 items-center' : 'text-black flex gap-x-2 items-center'}><FaList />Manage Items</NavLink>
                <NavLink to='/dashboard/managebooking' className={({isActive})=> isActive ? 'text-white flex gap-x-2 items-center' : 'text-black flex gap-x-2 items-center'}><FaBook/>Manage Bookin</NavLink>
                <NavLink to='/dashboard/alluser' className={({isActive})=> isActive ? 'text-white flex gap-x-2 items-center' : 'text-black flex gap-x-2 items-center'}><FaUsers />All User</NavLink>
            </ul> :
            <ul className="mt-16 space-y-4">
                <NavLink to='/dashboard/userhome' className={({isActive})=> isActive ? 'text-white flex gap-x-2 items-center' : 'text-black flex gap-x-2 items-center'}><FaHome/> User Home</NavLink>
                <NavLink to='/dashboard/reservation' className={({isActive})=> isActive ? 'text-white flex gap-x-2 items-center' : 'text-black flex gap-x-2 items-center'}><FaCalendar/> Reservation</NavLink>
                <NavLink to='/dashboard/paymenthistory' className={({isActive})=> isActive ? 'text-white flex gap-x-2 items-center' : 'text-black flex gap-x-2 items-center'}><HiCreditCard /> Payment History</NavLink>
                <NavLink to='/dashboard/cart' className={({isActive})=> isActive ? 'text-white flex gap-x-2 items-center' : 'text-black flex gap-x-2 items-center'}><FaCartShopping/> My Cart</NavLink>
                <NavLink to='/dashboard/addreview' className={({isActive})=> isActive ? 'text-white flex gap-x-2 items-center' : 'text-black flex gap-x-2 items-center'}><GoCommentDiscussion /> Add Review</NavLink>
                <NavLink to='/dashboard/booking' className={({isActive})=> isActive ? 'text-white flex gap-x-2 items-center' : 'text-black flex gap-x-2 items-center'}><MdEditCalendar /> My Booking</NavLink>
            </ul>
            }
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