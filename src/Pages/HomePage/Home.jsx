import Banner from "../../Component/Banner/Banner";
import CheafRecommendation from "./CHEFRECOMMENDS/CheafRecommendation";
import CategorySection from "./CatagorySection/CategorySection";
import ChefService from "./ChefService/ChefService";
import Contactus from "./Contactus/Contactus";
import OurMenu from "./OurMenu/OurMenu";

const Home = () => {
    return (
        <>
         <Banner/>  
         <CategorySection/> 
         <ChefService/>
         <OurMenu/>
         <Contactus/>
         <CheafRecommendation/>
        </>
    );
};

export default Home;