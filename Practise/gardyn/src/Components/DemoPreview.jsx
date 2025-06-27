import React from 'react'

export default function DemoPreview() {
  return (
    <>
     <div className='w-screen bg-[#e1ebe2] flex items-center flex-col justify-center px-[12px] sm:px-[20px] md:px-[20px] lg:px-[20px] xl:px-[100px] ""'>
            <div className='w-full max-w-[1500px] flex flex-col items-center justify-between ""'>
                <div className='px-[10px] py-[10px] mx-auto mt-[150px] bg-[#cfdbd0] rounded-full'><p className='text-[#354e33] text-[13px] font-semibold'>ALL DEMO ARE INCLUDED</p></div>
                <p className='text-[55px] mb-[20px]'><span className='text-[#354e33]'>DEMO</span><span className='text-[#798d7a] ml-[5px]'>PREVIEW</span></p>
            </div>
            <div className='w-full max-w-[1500px] grid grid-cols-3 gap-[60px]  ""'>
                <div>
                    <img className='rounded-[7px]' src="./Demo_Preview/homepage-1.webp" alt=""  style={{aspectRatio:"1 / 1"}}/>
                    <p className='text-center mt-[30px] text-[#354e33] font-bold'>Homepage Main</p>
                </div>
               <div>
                    <img className='rounded-[7px]' src="./Demo_Preview/homepage-2.webp" alt=""  style={{aspectRatio:"1 / 1"}}/>
                    <p className='text-center mt-[30px] text-[#354e33] font-bold'>Homepage Main</p>
                </div>
                <div>
                    <img className='rounded-[7px]' src="./Demo_Preview/homepage-3.webp" alt=""  style={{aspectRatio:"1 / 1"}}/>
                    <p className='text-center mt-[30px] text-[#354e33] font-bold'>Homepage Main</p>
                </div>
                <div>
                    <img className='rounded-[7px]' src="./Demo_Preview/homepage-4.webp" alt=""  style={{aspectRatio:"1 / 1"}}/>
                    <p className='text-center mt-[30px] text-[#354e33] font-bold'>Homepage Main</p>
                </div>
                <div>
                    <img className='rounded-[7px]' src="./Demo_Preview/homepage-5.webp" alt=""  style={{aspectRatio:"1 / 1"}}/>
                    <p className='text-center mt-[30px] text-[#354e33] font-bold'>Homepage Main</p>
                </div>
                <div>
                    <img className='rounded-[7px]' src="./Demo_Preview/homepage-6.webp" alt=""  style={{aspectRatio:"1 / 1"}}/>
                    <p className='text-center mt-[30px] text-[#354e33] font-bold'>Homepage Main</p>
                </div>
            </div>
      </div>
    </>
  )
}
