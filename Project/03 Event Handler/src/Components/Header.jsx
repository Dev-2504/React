import React, { useState } from 'react'

export default function Header() {




const [brand,setBrand] = useState("")
    const [des,setDes] = useState("")
    const [price,setPrice] = useState()
    const [desPrice,setDesPrice] = useState()
    const [rating, setRating] = useState("")
    const [file, setFile] = useState()


    const [api, setApi] = useState([])


    const Hello2 = (e) => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }




    const Hello = () => {
        let obj = {
            brand : brand,
            title: des,
            offer_price : desPrice,
            price : price,
            rating : rating,
            image : file
        }
        setApi([...api, obj])

        setBrand("")
    setDes("")
    setPrice(0)
    setDesPrice(0)
    setRating("")
    setFile()
    }



    

    const [num, setNum] = useState(false)

    const handleClick = () => {
        const Add = document.getElementById("Add")
        const hid = document.getElementById("hid")
        console.log(hid)
        
        if(num == false)
        {
            Add.style.transform = "translateX(-100%)"
            hid.style.display = "block"
            setNum(!num)
        }else {
            Add.style.transform = "translateX(0%)"
            hid.style.display = "none"
            setNum(!num)
        }
    }


  return (
    <>



{/* Navbar */}
    <div className='h-[80px] w-full sticky top-0 left-0 flex items-center justify-between bg-[#282a42] px-[100px]'>
        <img src="./logo.png" alt="" className='h-[50px]'/>
        <div className='w-[700px] flex items-center justify-evenly text-[14px] font-medium text-white'>
            <a href="">MEN</a>
            <a href="">WOMEN</a>
            <a href="">KIDS</a>
            <a href="">HOME</a>
            <a href="">BEAUTY</a>
            <a href="">GENZ</a>
            <a href="">STUDIO</a>
        </div>
        <div className='w-[200px] flex items-center justify-evenly'>
            <div>
                <svg style={{margin:"auto"}} xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><g fill="none" stroke="#ffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"></path><path d="M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></path></g></svg>
                <p className='text-[13px] font-medium mt-[3px] text-white'>Profile</p>
            </div>
            <div>
                <svg style={{margin:"auto"}} xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><path fill="none" stroke="#ffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.75 3.5C5.127 3.5 3 5.76 3 8.547C3 14.125 12 20.5 12 20.5s9-6.375 9-11.953C21 5.094 18.873 3.5 16.25 3.5c-1.86 0-3.47 1.136-4.25 2.79c-.78-1.654-2.39-2.79-4.25-2.79"></path></svg>
                <p className='text-[13px] font-medium mt-[3px] text-white'>Wishlist</p>
            </div>
            <div className='cursor-pointer' id='btn' onClick={handleClick}>
                <svg style={{margin:"auto"}} xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><g fill="none" stroke="#ffff" strokeDasharray={16} strokeDashoffset={16} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="M5 12h14"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="16;0"></animate></path><path d="M12 5v14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="16;0"></animate></path></g></svg>
                <p className='text-[13px] font-medium mt-[3px] text-white'>Add</p>
            </div>
        </div>
        
    </div>

{/* Content */}

<div id='Content'>


    {api.map((e,i) => {
        //  <!-- Card -->
            return (
            <div style={{height: "500px"}} className="Card" key={i}>
                {/* <!-- Card Image --> */}
                <div className="card_img" style={{backgroundImage : `url(${e.image})`}}></div>
                {/* <!-- Card Content --> */}
                <div className="card_content">
                    <p className="card_title">{e.brand}<span><svg style={{margin:"auto"}} xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><path fill="none" stroke="#ffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.75 3.5C5.127 3.5 3 5.76 3 8.547C3 14.125 12 20.5 12 20.5s9-6.375 9-11.953C21 5.094 18.873 3.5 16.25 3.5c-1.86 0-3.47 1.136-4.25 2.79c-.78-1.654-2.39-2.79-4.25-2.79"></path></svg></span></p>
                    <p className="card_des">{e.title}...</p>
                    {/* { let discount = Math.floor(((e.price - e.offer_price) / e.price) * 100)} */}
                    <p className="card_price"><span className="card_act_price">₹{e.offer_price}</span><del className="card_price_des">₹{e.price}</del> <span className="card_price_per">{Math.floor(((e.price - e.offer_price) / e.price) * 100)}%</span></p>
                </div>
            </div>)
    })}

    
    </div>



    
{/* Product Add Pop up */}

    <div id='Add' className='h-screen w-[350px] translate-x-full absolute right-0 top-0 bg-[#30334e] z-30' style={{transition:"all 0.3s ease-In-Out"}}>
        <div className='h-[80px] flex items-center justify-between px-[20px] border-b border-[#c9c9c9]'>
            <p className='text-[20px] font-medium text-white'>ADD PRODUCT</p>
            <svg onClick={handleClick}  xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 16 16"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"></path></svg>
        </div>


        <div className='h-auto flex flex-col px-[20px]'>
            <form action=""  onSubmit={(e) => {
                e.preventDefault();
                Hello();
                handleClick();
            }}>
            <input required type="text" value={brand} maxLength={20} placeholder='Product Brand Name' className='w-full h-[40px] rounded-[5px] px-[10px] mt-[15px] border text-[#c9c9c9] border-[#c9c9c9] outline-none' onChange={(e) => setBrand(e.target.value)}/>
            <textarea maxLength={45} required value={des} style={{resize:"none"}} type="text" placeholder='Product Description' className='w-full h-[60px] rounded-[5px] px-[10px] mt-[15px] border text-[#c9c9c9] border-[#c9c9c9] outline-none'onChange={(e) => setDes(e.target.value)}/>
            <input required type="number" value={price} max={9999} placeholder='Product Price in ₹' className='w-full h-[40px] rounded-[5px] px-[10px] mt-[15px] border text-[#c9c9c9] border-[#c9c9c9] outline-none'onChange={(e) => setPrice(e.target.value)}/>
            <input required type="number" value={desPrice} max={9999} placeholder='Product Discount Price in ₹' className='w-full h-[40px] rounded-[5px] px-[10px] mt-[15px] border text-[#c9c9c9] border-[#c9c9c9] outline-none'onChange={(e) => setDesPrice(e.target.value)}/>
            <input required type="number" value={rating} max={5} placeholder='Product Rating / 5' className='w-full h-[40px] rounded-[5px] px-[10px] mt-[15px] border text-[#c9c9c9] border-[#c9c9c9] outline-none'onChange={(e) => setRating(e.target.value)}/>
            <input required type="file" placeholder='Product Brand Name' className='w-full h-[200px] rounded-[5px] px-[10px] mt-[15px] border text-[#c9c9c9] border-[#c9c9c9] outline-none' onChange={Hello2}/>
    

            <button type='submit' className='px-[20px] py-[10px] border mt-[15px] rounded-[7px] text-white border-white'>Submit</button>
            </form>
        </div>
    </div>

    
    </>
  )
}
