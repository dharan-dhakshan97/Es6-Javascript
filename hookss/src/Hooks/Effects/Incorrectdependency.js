import React from 'react'
import {useState,useEffect} from "react";

const Incorrectdependency = () => {
    const [count,setCount]=useState(0);
// 
function ticks()
{
    setCount(preCount=>preCount+1);
}

    

useEffect(()=>
{
    // function deSomething()
    // {
    //     console.log(someProps);
    // }
    // doSomething();
    const interval=setInterval(ticks,1000);
    return()=>
    {
        clearInterval(interval);
    }
},[]);
// },[someProps]);
  return (
    <div>

<h1>The Every minute is {count} </h1>


    </div>
  )
}

export default Incorrectdependency;