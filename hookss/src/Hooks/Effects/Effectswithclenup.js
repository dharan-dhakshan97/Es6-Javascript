import React from 'react';
import {useState} from "react";
import Runeffectsonlyonce from "../Effects/Runeffectsonlyonce";
const Effectswithclenup = () => {
    const [display,setDisplay]=useState(true);
  return (
    <>
    <div>
        <button onClick={()=>setDisplay(!display)}>ToggleDisplay</button>
        {display && <Runeffectsonlyonce/>}
        </div>
    </>
  )
}

export default Effectswithclenup;