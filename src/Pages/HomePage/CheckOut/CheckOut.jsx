import React from 'react';
import SectionHeading from '../../../Component/SectionHeading/SectionHeading';
import bg from '../../../assets/home/featured.jpg'

const CheckOut = () => {
    return (
        <section style={{
            background:`linear-gradient(0deg,rgba(21,21,21,0.70)0%,rgba(21,21,21,0.70)100%),url('${bg}')`,
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundAttachment: 'fixed'
        }} className='container mx-auto py-10'>
            <div className='flex justify-center mt-20 mb-12'>
                <SectionHeading title='FROM OUR MENU' subTitle='Check it out'></SectionHeading>
            </div>
            <div className='flex justify-center items-center py-8 px-16 gap-x-16'>
                <div className='w-1/2 flex justify-end'>
                    <img className='w-[648px] h-[400px]' src={bg} alt="" />
                </div>
                <div className='w-1/2 text-white'>
                    <p>March 20, 2023</p>
                    <h1>WHERE CAN I GET SOME?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <div className="flex justify-center my-6">
                    <button   button className="text-[#1F2937] text-xl font-medium text-center py-5 px-8 border-b-2 rounded-lg border-black">READ MORE</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckOut;