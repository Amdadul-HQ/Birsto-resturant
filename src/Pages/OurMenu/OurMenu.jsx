import Cover from "./Cover/Cover";
import bannerBg from '../../assets/menu/banner3.jpg'
import TodayOffered from "./TodayOffered/TodayOffered";
import dessert from '../../assets/menu/dessert-bg.jpeg'
import DessertMenu from "../HomePage/OurMenu/DessertMenu/DessertMenu";
import pizzabg from '../../assets/menu/pizza-bg.jpg'
import PizzaMenu from "./PizzaMenu/PizzaMenu";
import supebg from '../../assets/menu/soup-bg.jpg'
import SoupeMenu from "./SoupMenu/SoupeMenu";
 
const OurMenu = () => {

    


    return (
        <>
         <Cover bg={bannerBg} bgColor='rgba(21,21,21,0.60)' heading='OUR MENU' description='Would you like to try a dish?' />   
         <TodayOffered/>
         <Cover bg={dessert} bgColor='rgba(21,21,21,0.60)' heading='DESSERT' description='Would you like to try a dish?' />   
         <DessertMenu/>
         <Cover bg={pizzabg} bgColor='rgba(21,21,21,0.60)' heading='PIZZA' description='Would you like to try a dish?' />   
         <PizzaMenu/>
         <Cover bg={supebg} bgColor='rgba(21,21,21,0.60)' heading='SOUP' description='Would you like to try a dish?' />   
         <SoupeMenu/>
        </>
    );
};

export default OurMenu;