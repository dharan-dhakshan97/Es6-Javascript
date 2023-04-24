import React from "react";
import Contexts2 from "../Contexts/Contexts2";
export const UserContext = React.createContext();
export const LoginContext = React.createContext();
const Contexts1 = () => {
  return (
    <>
      <UserContext.Provider value={"React Js"}>
        <LoginContext.Provider value={"Es6-Javascript"}>
          <Contexts2/>
        </LoginContext.Provider>
      </UserContext.Provider>
    </>
  );
};

export default Contexts1;
