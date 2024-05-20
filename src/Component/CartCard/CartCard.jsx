import React from 'react';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import useCart from '../../Hooks/useCart';

const CartCard = ({items}) => {

    const {user} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    // "name": "Haddock",
    //     "recipe": "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans",
    //     "image": "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-1-370x247.jpg",
    //     "category": "dessert",
    //     "price": 14.7
    const [,refetch] = useCart()
    const axiosSecure = useAxiosSecure()
    const {name,recipe,image,price,category,_id} = items
    const handleAddToCart = () => {
        
        if(user?.email){
            const cartItem = {
                menuId : _id,
                email: user.email,
                name,
                recipe,
                image,
                price,
                category
            }

            axiosSecure.post('/carts',cartItem)
            .then(res => {
                if(res.data.insertedId){
                    toast.success(`${name} Added to Cart`)
                    refetch()
                }
            })
            
        }
        else{
            Swal.fire({
                title: "You are Not Login.",
                text: "Please Login For Add Cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes.Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login',{state:{from:location}})
                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                //   });
                }
              });
        }

    }

    return (
        <div className='w-full bg-[#F3F3F3] font-inter flex flex-col justify-between'>
            <div className='w-full'>
                <img className='w-full' src={image} alt="" />
            </div>
            <div className='mt-4 mx-auto flex flex-col justify-center'>
                <p className='text-2xl text-center font-semibold'>{name}</p>
                <p className='text-base text-[#151515] font-normal text-center px-8'>{recipe}</p>
                <button
                 onClick={handleAddToCart} 
                 className='text-xl mx-auto mt-4 text-[#BB8506] font-medium px-7 w-fit border-b-4 border-[#BB8506] hover:border-[#1F2937] rounded-lg hover:bg-[#1F2937] bg-[#E8E8E8] py-5'>ADD TO CART</button>
            </div>
        </div>
    );
};

export default CartCard;