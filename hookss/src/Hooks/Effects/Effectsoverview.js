import React from 'react';
import {useState,useEffect} from "react";
import "../Styles/Styles.css";
const Effectsoverview = () => {

const [count,setCount]=useState(0);
const [msg,setMsg]=useState("message");
function handleChange()
{
    setCount(count+1);
}

function handleChanges()
{
    setMsg("My Favourite Color is Blue!");
}



useEffect(()=>
{
    console.log(count); // runs on every render
    console.log(msg);
})

return (
    <>
    
    <h1 style={{textAlign:'center'}}>Count</h1>
    
    <p>The Count is:{count}</p>
    <button onClick={handleChange}>Counter</button>

    <h1 style={{textAlign:'center'}}>Meesage</h1>
    <p>The Message is:{msg}</p>
    <button onClick={handleChanges}>Update Message</button>
    
    </>
  )
}

export default Effectsoverview;