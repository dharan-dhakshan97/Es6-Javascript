import React from 'react'
import Array from "./Array";
const Props = (props) => {
  const x=10;
  const text="Hi Hello";
  //const texts="Hello,World!";
  return (
   <>
   <div>
   <h2 style={{textAlign:'center'}}>React Js is javascript library andUser Interfaces</h2>
   <h1 style={{color:'red'}}>{text}</h1>
   <p>Welcome to our Cheif Guests {props.name}</p>
<p style={{color:'blue'}}>{x} </p>
{/* <p greet={texts}></p> */}


<Array></Array>



</div>
  
   </>
  )
}

export default Props