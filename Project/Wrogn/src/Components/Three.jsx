import FirstImage from '../Assets/Three/First.jpg'; // correct relative path
import SecondImage from '../Assets/Three/Second.jpg'; // correct relative path
import ThreeImage from '../Assets/Three/Three.jpg'; // correct relative path
import FourImage from '../Assets/Three/Four.jpg'; // correct relative path
import FiveImage from '../Assets/Three/Five.jpg'; // correct relative path
import SixImage from '../Assets/Three/Six.jpg'; // correct relative path
import SevenImage from '../Assets/Three/Seven.jpeg'; // correct relative path
import "../Components/Three.css"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

// import required modules
import 'swiper/css/navigation';

export default function Three() {
  return (
    <div className='w-full px-[50px] mt-[50px]'>
        <div className='h-[720px] flex justify-end items-end pb-[30px] pr-[20px]' id='Three'>
            <div className='w-[50%] h-[62%]'>

            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation = {true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
           <img src={FirstImage} alt="First" className='rounded-lg'/>
           <div className=' mt-[5px]'>
            <div className='w-full flex justify-between mt-[10px]'>
                <p className='text-start pr-[12px] text-white text-[15px]'>Tonal AOP Oversized T-shirts | White</p>
                <p className='text-white text-[20px]'>₹959</p>
            </div>
           </div>
        </SwiperSlide>
         <SwiperSlide>
           <img src={SecondImage} alt="First" className='rounded-lg'/>
           <div className=' mt-[5px]'>
            <div className='w-full flex justify-between mt-[10px]'>
                <p className='text-start pr-[12px] text-white text-[15px]'>Tonal AOP Oversized T-shirts | White</p>
                <p className='text-white text-[20px]'>₹959</p>
            </div>
           </div>
        </SwiperSlide>
         <SwiperSlide>
           <img src={ThreeImage} alt="First" className='rounded-lg'/>
           <div className=' mt-[5px]'>
            <div className='w-full flex justify-between mt-[10px]'>
                <p className='text-start pr-[12px] text-white text-[15px]'>Tonal AOP Oversized T-shirts | White</p>
                <p className='text-white text-[20px]'>₹959</p>
            </div>
           </div>
        </SwiperSlide>
         <SwiperSlide>
           <img src={FourImage} alt="First" className='rounded-lg'/>
           <div className=' mt-[5px]'>
            <div className='w-full flex justify-between mt-[10px]'>
                <p className='text-start pr-[12px] text-white text-[15px]'>Tonal AOP Oversized T-shirts | White</p>
                <p className='text-white text-[20px]'>₹959</p>
            </div>
           </div>
        </SwiperSlide>
         <SwiperSlide>
           <img src={FiveImage} alt="First" className='rounded-lg'/>
           <div className=' mt-[5px]'>
            <div className='w-full flex justify-between mt-[10px]'>
                <p className='text-start pr-[12px] text-white text-[15px]'>Tonal AOP Oversized T-shirts | White</p>
                <p className='text-white text-[20px]'>₹959</p>
            </div>
           </div>
        </SwiperSlide>
         <SwiperSlide>
           <img src={SixImage} alt="First" className='rounded-lg'/>
           <div className=' mt-[5px]'>
            <div className='w-full flex justify-between mt-[10px]'>
                <p className='text-start pr-[12px] text-white text-[15px]'>Tonal AOP Oversized T-shirts | White</p>
                <p className='text-white text-[20px]'>₹959</p>
            </div>
           </div>
        </SwiperSlide>
         <SwiperSlide>
           <img src={SevenImage} alt="First" className='rounded-lg'/>
           <div className=' mt-[5px]'>
            <div className='w-full flex justify-between mt-[10px]'>
                <p className='text-start pr-[12px] text-white text-[15px]'>Tonal AOP Oversized T-shirts | White</p>
                <p className='text-white text-[20px]'>₹959</p>
            </div>
           </div>
        </SwiperSlide>
      </Swiper>
        </div>
        </div>
    </div>
  )
}
