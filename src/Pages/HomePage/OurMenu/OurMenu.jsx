import { useEffect, useState } from "react";
import SectionHeading from "../../../Component/SectionHeading/SectionHeading";
import { data } from "autoprefixer";
import MenuCard from "./MenuCard/MenuCard";

const OurMenu = () => {
    const[menu,setMenu] = useState([])
    useEffect(()=> {
        fetch('/menu.json')
        .then(res => res.json())
        .then(data => {
            setMenu(data)
        })
    },[])
    return (
        <section className="container mx-auto mb-28">
            <div className='flex justify-center mt-20 mb-12'>
                <SectionHeading title='FROM OUR MENU' subTitle='Check it Out'></SectionHeading>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    menu && menu.slice(0,6).map(items => <MenuCard key={items._id} items={items}></MenuCard> )
                }
            </div>
            <div className="flex justify-center my-6">
                    <button className="text-[#1F2937] text-xl font-medium text-center py-5 px-8 border-b-2 rounded-lg border-black">View Full Menu</button>
            </div>
        </section>
    );
};

export default OurMenu;