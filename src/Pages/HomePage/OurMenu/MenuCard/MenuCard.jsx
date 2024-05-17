import React from 'react';

const MenuCard = ({items}) => {

    const {name,recipe,image,price} = items


    return (
        <div className="flex items-center w-full gap-x-8">
                    <div className='h-[104px] w-[120px]'>
                        <img className="w-full h-full rounded-full rounded-tl-none" src={image} alt="" />    
                    </div>
                    <div className='w-full'>
                        <div className="flex items-center justify-between mb-2">
                             <h1 className="text-[#151515] text-xl font-normal">{name} ------------------</h1>
                             <p className="text-[#BB8506] font-normal text-xl">$ {price}</p>
                        </div>
                        <p className="text-base text-[#737373] font-normal">{recipe}</p>
                    </div>
        </div>
    );
};

export default MenuCard;