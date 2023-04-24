import React from 'react'
import {useState,useEffect} from 'react';
const Runeffectsonlyonce = () => {

    const [x,setX]=useState(0);
;
const [y,setY]=useState(0);

function logmousePosition(e)
{
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
}

useEffect(()=>
{
    console.log("useEffect called");
    window.addEventListener("mousemove",logmousePosition);
    return()=>
    {
        console.log("unmounting the COmpoenent");
        window.removeEventListener("mousemove",logmousePosition);
    }
},[]);


  return (
    <>
    <h1>Hooks X- {x} Y- {y} </h1>
    </>
  )
}

export default Runeffectsonlyonce