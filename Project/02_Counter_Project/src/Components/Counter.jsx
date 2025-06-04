import react, { useState } from "react"

export default function Counter()
{
    const [count,setCount] = useState(0)

    const addition = () => {
        setCount(count + 1)
    }

    const substraction = () => {
        setCount(count - 1)
    }

    const restart = () => {
        setCount(0)
    }

    return(
        <>
            <div className="h-screen w-full flex flex-col items-center justify-center" id="border">
                <div className="py-[50px] px-[100px] rounded-2xl background_color"><p className="text-9xl">{count}</p></div>
                <div className="w-[600px] mt-[20px] flex items-center justify-evenly">
                    <button className="h-[50px] w-[150px] text-xl rounded-2xl background_color" onClick={addition}>+</button>
                    <button className="h-[50px] w-[150px] text-xl rounded-2xl background_color" onClick={restart}>Restart</button>
                    <button className="h-[50px] w-[150px] text-xl rounded-2xl background_color" onClick={substraction}>-</button>
                </div>
            </div>
        </>
    )
}