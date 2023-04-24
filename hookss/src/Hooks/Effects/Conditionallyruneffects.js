import React from "react";
import { useState, useEffect } from "react";

const Conditionallyruneffects= () => {
  const [count, setCount] = useState(0);
  const [name,setName]=useState("");

  useEffect(() => {
    console.log("Updating the UseEffect");
    document.title = `Your are ${count} times`;
  },[count]);


  return (
    <>
    <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
    <button onClick={() => setCount(count + 1)}> Click Me {count} Times!</button>
    </>
  );
};

export default Conditionallyruneffects;
