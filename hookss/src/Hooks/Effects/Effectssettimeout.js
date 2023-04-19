import React from 'react';
import {useState,useEffect} from "react";
import "../Styles/Styles.css";
const Effectsoverview = () => {

const [counters,setCounters]=useState(0);
// const [msg,setMsg]=useState("message");
function handleChange()
{
    setCounters(counters+1);
}

// function handleChanges()
// {
//     setMsg("My Favourite Color is Blue!");
// }

useEffect(()=>
{
    console.log(counters); // runs on every render
    // console.log(msger);
// const timeoutId = setTimeout(()=>
//     {
// if(counters>=10)
// {
// clearTimeout;
// }
// setCounters((count)=>count+2);},3000);
// console.log(counters);
// },[counters]);
});
return (
    <>
    
    <h1 style={{textAlign:'center'}}>Count using setTimeout</h1>
    
    <p>The Count is:{counters}</p>
    <button onClick={handleChange}>Counters</button>

    {/* <h1 style={{textAlign:'center'}}>Meesage</h1>
    <p>The Message is:{msg}</p>
    <button onClick={handleChanges}>Update Message</button> */}
    
    </>
  )
}

export default Effectsoverview;