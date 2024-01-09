import React, { useState, useEffect } from 'react';
import axios from 'axios'




export default function  Product () {
   
    const [increment, setIncrement] = useState(0);
    const [decrement, setDecrement] = useState(0);
    const [post,setPost] = useState([] );
    
useEffect(()=>{
    console.log("hello")
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            console.log(response.data)
            setPost(response.data)
         });
    });


   

  

    function Increment_value(){
        setIncrement(increment+1)
    }

    function Decrement_value(){
        setDecrement(decrement+1)
    }

    const List_Data=post.map(p=>{
     return <p>{p.title}</p> 
    })
    
    
    
  
return(
    <>
    <button onClick={Increment_value}>Increment {increment}</button>
    <button onClick={Decrement_value}>Decrement {decrement}</button>
    <p>{List_Data}</p>
   
    </>
   
)
    
   
}