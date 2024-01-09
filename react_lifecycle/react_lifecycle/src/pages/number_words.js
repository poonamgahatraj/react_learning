import { calculateNewValue } from "@testing-library/user-event/dist/utils"
import { useState } from "react"



export default function Number(){

    const [name,setName]= useState('')

    function calculateNewValue(){
        console.log("ghfgfg")
        const words = name.trim().split(' ');

       console.log(words)

       const arrayLength= words.length
      alert("the number of words are " +" " + arrayLength)
    }

    return(
        <>
        <form onSubmit={calculateNewValue}>
        <label>Name</label>
        <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} ></input>
        <button  type="submit"  > Calculate</button>
        </form>
       
        </>
    )
}