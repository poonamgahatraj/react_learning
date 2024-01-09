import { useState } from "react"
export default function Form_Submit(){
const [name,setName]= useState('')
const [email,setEmail]= useState('')

function handleSubmit(){
    if(name.trim()==='' )
    {
        alert("please fill out the namefeild")
    }
    if(email.trim()==='' )
    {
        alert("please fill out the emailfeild")
    }

    else{
        alert("form submitted")
    }
}


    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>Name :</label>
            <input type="text" placeholder="Enter Your name" onChange={(e) => setName(e.target.value)}></input> 
            <br></br>
            <br></br>
            <label>E-mail :</label>
            <input type="text" placeholder="Enter Your e-mail" onChange={(e) => setEmail(e.target.value)}></input> 
            <br></br>
            <br></br>
            <button type="submit">Submit</button>


        
        </form>
        </>
    )
}

