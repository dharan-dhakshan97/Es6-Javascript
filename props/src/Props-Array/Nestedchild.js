import React from 'react'

const Nestedchild = ({arr}) => {
  return (
    <>
    <div>
    <h1 style={{textAlign:'center'}}>The Array of Listed Items</h1>

    <div style={{textAlign:'center', color:'red'}}>
        
        {arr.map((e,index)=>
    <p key={index}>{e}</p>)} </div>

    </div>
    </>
  )
}

export default Nestedchild;