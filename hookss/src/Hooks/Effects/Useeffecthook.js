import React from 'react';
import {useState,useEffect} from 'react';

const useEffecthook = () => {
  const [count,setCount]=useState(0);


useEffect(()=>
{
  console.log("UseEffects render");
  document.title=(`Your are ${count} times`);
})



  return (
    <>
    
    <button onClick={()=>setCount(count+1)}>Click Me {count} Times!</button>
    
    
    </>
  )
}

export default useEffecthook;