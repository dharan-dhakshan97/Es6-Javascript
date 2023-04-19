import React from 'react'
import {useState} from 'react';
import "../Styles/Styles.css";
const Stateupdate = () => {

const [names,setNames]=useState("Ravi");
const [ages,setAges]=useState(23);

function name()
{
    setNames("Venkat");
}

function age()
{
    setAges(24);
}

  return (
    <>
    
    <div>

<p>i am {names}</p>

<p>i am {ages} years old </p>

<div>

<button onClick={name}>Change name</button> 

<button onClick={age}>Change age</button>

</div>

    </div>
    
    
    
    
    </>
  )
}

export default Stateupdate