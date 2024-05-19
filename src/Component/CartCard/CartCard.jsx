import React from 'react';

const CartCard = ({items}) => {
    // "name": "Haddock",
    //     "recipe": "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans",
    //     "image": "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-1-370x247.jpg",
    //     "category": "dessert",
    //     "price": 14.7

    const {name,recipe,image,price,category} = items

    return (
        <div className='w-full bg-[#F3F3F3] font-inter flex flex-col justify-between'>
            <div className='w-full'>
                <img className='w-full' src={image} alt="" />
            </div>
            <div className='mt-4 mx-auto flex flex-col justify-center'>
                <p className='text-2xl text-center font-semibold'>{name}</p>
                <p className='text-base text-[#151515] font-normal text-center px-8'>{recipe}</p>
                <button className='text-xl mx-auto mt-4 text-[#BB8506] font-medium px-7 w-fit border-b-4 border-[#BB8506] hover:border-[#1F2937] rounded-lg hover:bg-[#1F2937] bg-[#E8E8E8] py-5'>ADD TO CART</button>
            </div>
        </div>
    );
};

export default CartCard;