import FirstImage from '../assets/Second_Slider/First.webp'; // correct relative path
import SecondImage from '../Assets/Second_Slider/Second.webp'; // correct relative path
import ThreeImage from '../Assets/Second_Slider/Three.webp'; // correct relative path
import FourImage from '../Assets/Second_Slider/Four.webp'; // correct relative path
import FiveImage from '../Assets/Second_Slider/Five.jpeg'; // correct relative path
// import SixImage from '../Assets/Second_Slider/Six.jpg'; // correct relative path
// import SevenImage from '../Assets/Second_Slider/Seven.jpeg'; // correct relative path








import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Slider.css';

// import required modules
import { Autoplay, Pagination} from 'swiper/modules';


export default function Second_Slider() {
   return (
    <>
    <div className='px-[50px] mt-[50px]'>

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
        <SwiperSlide><img src={FirstImage} alt="" className='rounded-4xl'/></SwiperSlide>
        <SwiperSlide><img src={SecondImage} alt="" className='rounded-4xl'/></SwiperSlide>
        <SwiperSlide><img src={ThreeImage} alt="" className='rounded-4xl'/></SwiperSlide>
        <SwiperSlide><img src={FourImage} alt="" className='rounded-4xl'/></SwiperSlide>
        <SwiperSlide><img src={FiveImage} alt="" className='rounded-4xl'/></SwiperSlide>
      </Swiper>
          </div>
    </>
  );
}
