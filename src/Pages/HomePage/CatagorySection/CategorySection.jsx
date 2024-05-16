import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SectionHeading from '../../../Component/SectionHeading/SectionHeading';



const CategorySection = () => {
    return (
        <section className='container mx-auto mb-28'>
            <div className='flex justify-center mt-20 mb-12'>
                <SectionHeading title='ORDER ONLINE' subTitle='From 11:00am to 10:00pm'></SectionHeading>
            </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={1}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='relative' src={img1}></img>
            <h1 className='text-3xl absolute bottom-0 ml-20 text-white'>SALADS</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img className='relative' src={img2}></img>
            <h1 className='text-3xl absolute bottom-0 ml-20 text-white'>PIZZAS</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img className='relative' src={img3}></img>
            <h1 className='text-3xl absolute bottom-0 ml-20 text-white'>SOUPS</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img className='relative' src={img4}></img>
            <h1 className='text-3xl absolute bottom-0 ml-20 text-white'>DESSERTS</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img className='relative' src={img5}></img>
            <h1 className='text-3xl absolute bottom-0 ml-20 text-white'>SALADS</h1>
        </SwiperSlide>
      </Swiper>
    </section>
    );
};

export default CategorySection;