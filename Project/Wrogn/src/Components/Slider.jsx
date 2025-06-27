import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Slider.css';

// import required modules
import { Autoplay, Pagination} from 'swiper/modules';


export default function Slider() {
   return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="WEBSITE-BANNER-1.webp" alt="" className='rounded-4xl'/></SwiperSlide>
        <SwiperSlide><img src="WEBSITE-BANNER-2.webp" alt="" className='rounded-4xl'/></SwiperSlide>
        <SwiperSlide><img src="WEBSITE-BANNER-3.webp" alt="" className='rounded-4xl'/></SwiperSlide>
        <SwiperSlide><img src="WEBSITE-BANNER-4.webp" alt="" className='rounded-4xl'/></SwiperSlide>
        <SwiperSlide><img src="WEBSITE-BANNER-5.webp" alt="" className='rounded-4xl'/></SwiperSlide>
        <SwiperSlide><img src="WEBSITE-BANNER-6.jpeg" alt="" className='rounded-4xl'/></SwiperSlide>
      </Swiper>
    </>
  );
}
