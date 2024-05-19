import SectionHeading from "../../../Component/SectionHeading/SectionHeading";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {

    const [reviews,setReviews] = useState([])
    useEffect(()=> {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])


    return (
        <section className="container mx-auto my-20 font-inter">
            <div className='flex justify-center mt-20 mb-12'>
                <SectionHeading title='TESTIMONIALS' subTitle='What Our Clients Say'></SectionHeading>
            </div>
            <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            reviews && reviews.map( review => <SwiperSlide key={review._id}>
                <div className="px-16 text-center">
                <div className="flex justify-center">
                <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
                />
                </div>
                    <p>{review.details}</p>
                    <p className="text-3xl font-medium text-[#CD9003]">{review.name}</p>
                </div>
            </SwiperSlide> )
        }
      </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;