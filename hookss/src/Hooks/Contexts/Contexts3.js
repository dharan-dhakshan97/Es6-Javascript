import React from 'react'
import {useContext} from 'react';
import Contexts2 from "../Contexts/Contexts1";
import {UserContext,LoginContext} from "../Contexts/Contexts1";

const Contexts3 = () => {
const data=useContext(UserContext);
const login=useContext(LoginContext);

  return (
    <>
      <div>
        {data} - {login}
        <Contexts2 />
      </div>
    </>
  );
}

export default Contexts3