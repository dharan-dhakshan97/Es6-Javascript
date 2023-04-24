import React from 'react'
import {UserContext,LoginContext} from "./Contexts1";
const Contexts2 = () => {
  return (
    <>
 <div>

<UserContext.Consumer>
{data=>
    {
        return (
        
        <LoginContext.Consumer>

          {login=>{
              return <div> I Know {data}. and I  Know also {login} </div>;
            }
          }
        </LoginContext.Consumer>
        
        )
    }
}
</UserContext.Consumer>
    </div>
    </>
  )
}

export default Contexts2;