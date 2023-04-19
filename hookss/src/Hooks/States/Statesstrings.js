import React from 'react'
import {useState}from 'react';
import "../Styles/Styles.css";
const Statesstrings = () => {

const [numbers,setNumbers]=useState(0);

function number()
{
    setNumbers(numbers+1);
}

const [count,setCount]=useState(0);


function add()
{
  setCount(count+1);
}


function sub()
{
  setCount(count-1);
}

function reset()
{
  setCount(0)
}




const [texts,setText]=useState("");

function string(e)
{
setText(e.target.value);
}

  return (
    <>

<h1 style={{textAlign:'center'}}>Numbers{numbers}</h1>
<button onClick={number}>Increment</button>


<h1 style={{textAlign:'center'}}>Strings {texts}</h1>
<input type='text' onChange={string}></input>



<h1>Add : {count}</h1>
<button onClick={add}>Add </button>
<h1>Sub : {count} </h1>
<button onClick={sub}>Sub </button>
<h1>Reset</h1>
<button onClick={reset}>Reset</button>






    </>
  )
}

export default Statesstrings;