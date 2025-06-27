import React from 'react'

export default function Header() {
  return (
    <div className='w-full h-[75px] flex items-center justify-between px-[50px]'>
      <div className='flex items-center justify-between'>
        <img src="Wrogn_Logo.svg" alt="" className='w-[50px]'/>
        <div className='flex flex-col justify-center ml-[50px] w-[1000px] font-semibold text-[13px]'>
            <div className='flex items-center justify-between'>
                <a href="">EOSS</a>
                <a href="">EXCLUSIVE</a>
                <a href="" id='all_products' className='peer'>ALL PRODUCTS</a>
                <a href="" id='topwear'>TOPWEAR</a>
                <a href="" id='bottomwear'>BOTTOMWEAR</a>
                <a href="" id='footwear'>FOOTWEAR</a>
                <a href="" id='fresh_arrivals'>FRESH ARRIVALS</a>
                <a href="" id='essentials'>ESSENTIALS</a>
            </div>
            <div className='relative'>
                {/* All Products */}
               <div id='all_products_hover' className='absolute top-[25px] left-[200px] px-[30px] py-[40px] grid grid-cols-2 gap-[30px] border rounded-xl'>
                    <div className='flex flex-col text-[13px]'>
                        <a href="">VIEW ALL</a>
                        <a href="" className='mt-[15px]'>SPRING SUMMER 25</a>
                        <a href="" className='mt-[15px]'>BESTSELLERS</a>
                        <a href="" className='mt-[15px]'>FRESH ARRIVALS</a>
                        <a href="" className='mt-[15px]'>SHIRTS</a>
                        <a href="" className='mt-[15px]'>TSHIRTS</a>
                        <a href="" className='mt-[15px]'>JEANS</a>
                        <a href="" className='mt-[15px]'>CARGOS & JOGGERS</a>
                    </div>
                    <div className='flex flex-col text-[13px]'>
                        <a href="">VIEW ALL</a>
                        <a href="" className='mt-[15px]'>SWEARSHIRTS</a>
                        <a href="" className='mt-[15px]'>JACKETS</a>
                        <a href="" className='mt-[15px]'>SWEATERS</a>
                        <a href="" className='mt-[15px]'>SHORTS</a>
                        <a href="" className='mt-[15px]'>POLOS</a>
                        <a href="" className='mt-[15px]'>ESSENTIALS</a>
                        <a href="" className='mt-[15px]'>FOOTWEAR</a>
                    </div>
                </div>
                {/* Topwear */}
                 <div className='absolute top-[25px] left-[335px] px-[30px] py-[40px] grid grid-cols-2 gap-[30px] border rounded-xl'>
                    <div className='flex flex-col text-[13px]'>
                        <a href="">VIEW ALL</a>
                        <a href="" className='mt-[15px]'>VIEW ALL</a>
                        <a href="" className='mt-[15px]'>BESTSELLERS</a>
                        <a href="" className='mt-[15px]'>FRESH ARRIVALS</a>
                        <a href="" className='mt-[15px]'>SHIRTS</a>
                        <a href="" className='mt-[15px]'>TSHIRTS</a>
                    </div>
                    <div className='flex flex-col text-[13px]'>
                        <a href="">VIEW ALL</a>
                        <a href="" className='mt-[15px]'>POLOS</a>
                        <a href="" className='mt-[15px]'>JACKETS</a>
                        <a href="" className='mt-[15px]'>SWATSHIRTS</a>
                        <a href="" className='mt-[15px]'>SWEATERS</a>
                    </div>
                </div>
                {/* Bottomwear */}
                <div className='absolute top-[25px] left-[465px] px-[30px] py-[40px] grid grid-cols-2 gap-[30px] border rounded-xl'>
                    <div className='flex flex-col text-[13px]'>
                        <a href="">VIEW ALL</a>
                        <a href="" className='mt-[15px]'>VIEW ALL</a>
                        <a href="" className='mt-[15px]'>BESTSELLERS</a>
                        <a href="" className='mt-[15px]'>FRESH ARRIVALS</a>
                    </div>
                    <div className='flex flex-col text-[13px]'>
                        <a href="">VIEW ALL</a>
                        <a href="" className='mt-[15px]'>JEANS</a>
                        <a href="" className='mt-[15px]'>CARGO & JOGGERS</a>
                        <a href="" className='mt-[15px]'>SHORTS</a>
                    </div>
                </div>
                {/* FootWear */}
                <div className='absolute top-[25px] left-[610px] px-[30px] py-[40px] grid grid-cols-2 gap-[30px] border rounded-xl'>
                    <div className='flex flex-col text-[13px]'>
                        <a href="">VIEW ALL</a>
                        <a href="" className='mt-[15px]'>VIEW ALL</a>
                        <a href="" className='mt-[15px]'>SNEAKERS</a>
                    </div>
                    <div className='flex flex-col text-[13px]'>
                        <a href="">VIEW ALL</a>
                        <a href="" className='mt-[15px]'>SLIDERS</a>
                        <a href="" className='mt-[15px]'>ATHLEISURE</a>
                    </div>
                </div>
                {/* Fresh Arrivals */}
                <div className='absolute top-[25px] left-[740px] px-[30px] py-[40px] grid grid-cols-2 gap-[30px] border rounded-xl'>
                    <div className='flex flex-col text-[13px]'>
                        <a href="">VIEW ALL</a>
                        <a href="" className='mt-[15px]'>T-SHIRTS</a>
                        <a href="" className='mt-[15px]'>SHIRTS</a>
                        <a href="" className='mt-[15px]'>JEANS</a>
                    </div>
                    <div className='flex flex-col text-[13px]'>
                        <a href="">VIEW ALL</a>
                        <a href="" className='mt-[15px]'>CARGOS</a>
                        <a href="" className='mt-[15px]'>POLOS</a>
                    </div>
                </div>
                {/* Essentials */}
                <div className='absolute w-[260px] top-[25px] left-[900px] px-[30px] py-[40px] grid grid-cols-2 gap-[30px] border rounded-xl'>
                    <div className='flex flex-col text-[13px]'>
                        <a href="">VIEW ALL</a>
                        <a href="" className='mt-[15px]'>T-SHIRTS</a>
                        <a href="" className='mt-[15px]'>PERFUME</a>
                        <a href="" className='mt-[15px]'>CAPS</a>
                    </div>
                    <div className='flex flex-col text-[13px]'>
                        <a href="">VIEW ALL</a>
                        <a href="" className='mt-[15px]'>SOCKS</a>
                        <a href="" className='mt-[15px]'>TRUNKS</a>
                        <a href="" className='mt-[15px]'>BRIEFS</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className='flex items-center'>
        <div className='w-[250px] h-[40px] rounded-md flex items-center p-[5px]' style={{border:"1px solid grey"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m-2.107 5.42l3.08 3.08"></path></svg>
            <input type="text" placeholder='SEARCH' className='ml-[10px] w-full flex items-center text-[14px] text-gray-600 border-none outline-none'/>
        </div>
        <svg className='ml-[10px]' xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><g fill="none" stroke="#000" strokeWidth={1.5}><path strokeLinejoin="round" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"></path><circle cx={12} cy={7} r={3}></circle></g></svg>
        <svg className='ml-[10px]' xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><path fill="#000" fillRule="evenodd" d="M12 2.75A2.25 2.25 0 0 0 9.75 5v.26c.557-.01 1.168-.01 1.84-.01h.821c.67 0 1.282 0 1.84.01V5A2.25 2.25 0 0 0 12 2.75m3.75 2.578V5a3.75 3.75 0 1 0-7.5 0v.328q-.214.018-.414.043c-1.01.125-1.842.387-2.55.974S4.168 7.702 3.86 8.672c-.3.94-.526 2.147-.81 3.666l-.021.11c-.402 2.143-.718 3.832-.777 5.163c-.06 1.365.144 2.495.914 3.422c.77.928 1.843 1.336 3.195 1.529c1.32.188 3.037.188 5.218.188h.845c2.18 0 3.898 0 5.217-.188c1.352-.193 2.426-.601 3.196-1.529s.972-2.057.913-3.422c-.058-1.331-.375-3.02-.777-5.163l-.02-.11c-.285-1.519-.512-2.727-.81-3.666c-.31-.97-.72-1.74-1.428-2.327c-.707-.587-1.54-.85-2.55-.974a11 11 0 0 0-.414-.043M8.02 6.86c-.855.105-1.372.304-1.776.64c-.403.334-.694.805-.956 1.627c-.267.84-.478 1.958-.774 3.537c-.416 2.217-.711 3.8-.764 5.013c-.052 1.19.14 1.88.569 2.399c.43.517 1.073.832 2.253 1c1.2.172 2.812.174 5.068.174h.72c2.257 0 3.867-.002 5.068-.173c1.18-.169 1.823-.484 2.253-1.001c.43-.518.621-1.208.57-2.4c-.054-1.211-.349-2.795-.765-5.012c-.296-1.58-.506-2.696-.774-3.537c-.262-.822-.552-1.293-.956-1.628s-.92-.534-1.776-.64c-.876-.108-2.013-.109-3.62-.109h-.72c-1.607 0-2.744.001-3.62.11" clipRule="evenodd"></path></svg>
      </div>
    </div>
  )
}
