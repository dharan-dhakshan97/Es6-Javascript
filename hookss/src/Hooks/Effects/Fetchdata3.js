import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Fetchdata3 = () => {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);
  const[idfrombutton,setIdfrombutton]=useState(1);

//when you click button you will get the data based on id dependency....

function handleClick()
{
    setIdfrombutton(id);
}



  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idfrombutton}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idfrombutton]);

  return (
    <>
      <div>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button onClick={handleClick}>FetchData</button>
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

export default Fetchdata3;
