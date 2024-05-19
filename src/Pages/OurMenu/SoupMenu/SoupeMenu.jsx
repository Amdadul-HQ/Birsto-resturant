import { Link } from "react-router-dom";
import SectionHeading from "../../../Component/SectionHeading/SectionHeading";
import useMenu from "../../../Hooks/useMenu";
import MenuCard from "../../HomePage/OurMenu/MenuCard/MenuCard";

const SoupeMenu = () => {
    const[menu] = useMenu()
    const soupeMenu = menu.filter(item => item.category === 'soup')
    return (
        <section className="container mx-auto mb-28">
            <div className='flex justify-center mt-20 mb-12'>
                <SectionHeading title="SOUP" subTitle="Don't miss"></SectionHeading>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                   soupeMenu &&soupeMenu.map(items => <MenuCard key={items._id} items={items}></MenuCard> )
                }
            </div>
            <div className="flex justify-center my-6">
            <Link to='/order/soup'><button className="text-[#1F2937] text-xl font-medium text-center py-5 px-8 border-b-2 rounded-lg border-black">ORDER YOUR FAVOURITE FOOD</button></Link>
            </div>
        </section>
    );
};

export default SoupeMenu;