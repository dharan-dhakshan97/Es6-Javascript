import React from 'react'

const Parent = () => {

//using the array


const arr=[1,2,3,4,5];
const element=arr.map((e,index)=>

    <h1 Key={index}>{e}</h1>
)
  return (
    <>
    <h1> Listed The arrary Elements</h1>
    <div>{element}</div>
    </>
  )
}

export default Parent;