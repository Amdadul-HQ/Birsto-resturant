import SectionHeading from "../../../Component/SectionHeading/SectionHeading";
import useMenu from "../../../Hooks/useMenu";
import MenuCard from "../../HomePage/OurMenu/MenuCard/MenuCard";

const PizzaMenu = () => {
    const[menu] = useMenu()
    const pizzaMenu = menu.filter(item => item.category === 'pizza')
    
    return (
        <section className="container mx-auto mb-28">
            <div className='flex justify-center mt-20 mb-12'>
                <SectionHeading title="PIZZA" subTitle="Don't miss"></SectionHeading>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                   pizzaMenu &&pizzaMenu.map(items => <MenuCard key={items._id} items={items}></MenuCard> )
                }
            </div>
            <div className="flex justify-center my-6">
                    <button className="text-[#1F2937] text-xl font-medium text-center py-5 px-8 border-b-2 rounded-lg border-black">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </section>
    );
};

export default PizzaMenu;