import React from 'react'
import {useState} from "react";
import "../Styles/Styles.css";
const Statesobjects = () => {


const [items,setItems]=useState({Item1:" ", Item2:" ",Item3:" "});


function handleChange(e)
{
  setItems({...items,Item1:e.target.value});
}

function handleChanges(e)
{
  setItems({...items,Item2:e.target.value});
}




  return (
    <>
    <input type='text'  value={items.Item1}  onChange={handleChange}/>
    <h1>The first Item is : {items.Item1} </h1>

<input type='text'  value={items.Item2} onChange={handleChanges}/>
    <h1>The last Item is : {items.Item2} </h1>


      </>
  )
}

export default Statesobjects;