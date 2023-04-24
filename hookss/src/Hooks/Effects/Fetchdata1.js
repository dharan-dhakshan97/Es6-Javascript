import React from 'react'
 import {useState,useEffect} from 'react';
 import axios from 'axios';

const Fetchdata1 = () => {
const [posts,setPosts]=useState([]);


useEffect(()=> {
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
      .then(res=> {
            console.log(res);
            setPosts(res.data)
        })
        .catch(err=> {
                console.log(err);
            })
},[]);



  return (
    <>
    <div>
<ul>
{posts.map(post=>(

    <li key={post.id}>{post.title}</li>
))}
</ul>


{/* <ul>
    {
        posts.map((post,index) =>{
        return(
        <li key={index}>{post.title}</li>
        )})
    }
</ul> */}


    </div>
    
    </>
  )
}

export default Fetchdata1;