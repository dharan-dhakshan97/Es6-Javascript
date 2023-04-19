import React from 'react';
import {useState,useEffect} from "react";
import "../Styles/Styles.css";
const Effectsoverview = () => {

const [counter,setCounter]=useState(0);
const [msger,setMsger]=useState("message");
function handleChange()
{
    setCounter(counter+1);
}

function handleChanges()
{
    setMsger("My Favourite Color is Blue!");
}

useEffect(()=>  
{
    console.log("counter using Dependency");
    console.log("message using Dependency");
    // console.log(msger);
},[counter,msger]);


return (
    <>
    <h1 style={{textAlign:'center'}}>Count using Empty dependency</h1>
    <p>The Count is:{counter}</p>
    <button onClick={handleChange}>Counter</button>



    <h1 style={{textAlign:'center'}}>Meesage using Empty dependency</h1>
    <p>The Message is:{msger}</p>
    <button onClick={handleChanges}>Update Message </button>
    </>
  )
}

export default Effectsoverview;