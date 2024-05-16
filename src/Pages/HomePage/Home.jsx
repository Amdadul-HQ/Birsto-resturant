import Banner from "../../Component/Banner/Banner";
import CategorySection from "./CatagorySection/CategorySection";
import ChefService from "./ChefService/ChefService";
import OurMenu from "./OurMenu/OurMenu";

const Home = () => {
    return (
        <>
         <Banner/>  
         <CategorySection/> 
         <ChefService/>
         <OurMenu/>
        </>
    );
};

export default Home;