import React from 'react'
import Props from "../Components-Props/Props";
const Component = (props) => {

  
  return (
   <>
  <h3 style={{textAlign:'center'}}>{props.h1}Welcome to our React Js{props.h2}</h3>
  {/* //passing a adata as a string  */}
{/* <p style={{color:'green'}}>{greet}</p> */}

<Props name="Venkat!"></Props> 

   </>
  )
}


export default Component;