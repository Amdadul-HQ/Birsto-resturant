import Cover from "./Cover/Cover";
import bannerBg from '../../assets/menu/banner3.jpg'
 
const OurMenu = () => {
    return (
        <>
         <Cover bg={bannerBg} bgColor='rgba(21,21,21,0.60)' heading='OUR MENU' description='Would you like to try a dish?' />   
        </>
    );
};

export default OurMenu;