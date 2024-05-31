import { FaStore, FaWallet } from "react-icons/fa";
import useAuth from "../../../../Hooks/useAuth";

const UserHome = () => {
    const {user} = useAuth()
    return (
        <section className="p-5 font-poppins">
            <h1>HI! Welcome Back </h1>
            <p>{user?.displayName}</p>
            <div className="grid grid-cols-3 gap-6">
                <div className="bg-blue-400 gap-x-5 p-6 rounded-xl font-semibold text-white flex justify-center items-center">
                    <div className="">
                    <FaWallet className="text-8xl" />
                    </div>
                    <div>
                    <p className="text-4xl">205</p>
                    <p>Menu</p>
                    </div>
                </div>
                <div className="bg-blue-400 gap-x-5 p-6 rounded-xl font-semibold text-white flex justify-center items-center">
                    <div className="">
                    <FaStore className="text-8xl" />
                    </div>
                    <div>
                    <p className="text-4xl">205</p>
                    <p>Shop</p>
                    </div>
                </div>
                <div className="bg-blue-400 gap-x-5 p-6 rounded-xl font-semibold text-white flex justify-center items-center">
                    <div className="">
                    <FaWallet className="text-8xl" />
                    </div>
                    <div>
                    <p className="text-4xl">205</p>
                    <p>Menu</p>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </section>
    );
};

export default UserHome;