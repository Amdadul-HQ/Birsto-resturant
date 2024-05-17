import Banner from "../../Component/Banner/Banner";
import CheafRecommendation from "./CHEFRECOMMENDS/CheafRecommendation";
import CategorySection from "./CatagorySection/CategorySection";
import CheckOut from "./CheckOut/CheckOut";
import ChefService from "./ChefService/ChefService";
import Contactus from "./Contactus/Contactus";
import OurMenu from "./OurMenu/OurMenu";
import Testimonials from "./TESTIMONIALS/Testimonials";

const Home = () => {
    return (
        <>
         <Banner/>  
         <CategorySection/> 
         <ChefService/>
         <OurMenu/>
         <Contactus/>
         <CheafRecommendation/>
         <CheckOut/>
         <Testimonials/>
        </>
    );
};

export default Home;