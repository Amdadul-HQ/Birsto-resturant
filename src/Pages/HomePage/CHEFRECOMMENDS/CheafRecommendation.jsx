import { useEffect, useState } from "react";
import SectionHeading from "../../../Component/SectionHeading/SectionHeading";
import CartCard from "../../../Component/CartCard/CartCard";

const CheafRecommendation = () => {
    const [foods,setFoods] = useState([])
    useEffect(()=> {
        fetch('/cheafRe.json')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[])
    return (
        <section className="container mx-auto my-20">
            <div className='flex justify-center mt-20 mb-12'>
                <SectionHeading title='CHEF RECOMMENDS' subTitle='Should Try'></SectionHeading>
            </div>
            <div className="grid grid-cols-3 gap-x-6">
                {
                    foods && foods.map(items => <CartCard key={items._id} items={items} />)
                }
            </div>
        </section>
    );
};

export default CheafRecommendation;