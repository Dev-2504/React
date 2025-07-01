import React from 'react'

export default function LocalStorage() {

    // Object to Json
    localStorage.setItem("Student",JSON.stringify({name:"Dev",age:20}))

    // Json to Object
    let a = JSON.parse(localStorage.getItem("Student"))
    console.log(a)


    JSON.stringify()
    JSON.parse()

    return(
        <>
            
        </>
    )
}
    