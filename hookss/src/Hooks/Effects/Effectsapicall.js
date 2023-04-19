// // import React from 'react';
// // import {useState,useEffect} from "react";
// // import "../Styles/Styles.css";
// // const Effectsoverview = () => {

// // const [count,setCount]=useState(0);
// // const [msg,setMsg]=useState("message");
// // function handleChange()
// // {
// //     setCount(count+1);
// // }

// // function handleChanges()
// // {
// //     setMsg("My Favourite Color is Blue!");
// // }



// // useEffect(()=>
// // {

// // fetch('https://jsonplaceholder.typicode.com/todos/1')
// //       .then(response => response.json())
// //       .then(json => setCount(json))
// //       .catch(error=>console.error(error));
// //  }, []);
// //     // console.log(count); // runs on every render
// //     // console.log(msg);


// // return (
// //     <>
    
// //     <h1 style={{textAlign:'center'}}>Count</h1>
    
// //     <p>The Count is:{count}</p>
// //     <button onClick={handleChange}>Counter</button>


// // {count ? <pre>{JSON.stringify(count, 0)}</pre> : 'Loading...'}


// //     <h1 style={{textAlign:'center'}}>Meesage</h1>
// //     <p>The Message is:{msg}</p>
// //     <button onClick={handleChanges}>Update Message</button>
    
// //     </>
// //   )
// // }

// // export default Effectsoverview;


// import React, { useState, useEffect } from 'react';

// function Effectsapicall() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch('https://api.example.com/data')
//       .then(response => response.json())
//       .then(json => setData(json))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <div>
//       {data ? <pre>{JSON.stringify(data, 2)}</pre> : 'Loading...'}
//       {data.map((value,index)=>
//       (
//         <p>{value.title}</p>
//       ))}
//     </div>
//   );
// }

// export default Effectsapicall;
















