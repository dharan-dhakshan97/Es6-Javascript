import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Fetchdata2 = () => {
  const [post, setPost] = useState([]);
const [id,setId]=useState(1);


//howto get an individual datas in the database....


  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <div>
        <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
        <div>{post.title}</div>
        {/* <ul>
          {post.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul> */}

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
  );
};

export default Fetchdata2;
