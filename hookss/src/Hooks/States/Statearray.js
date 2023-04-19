import {useState} from 'react';
import "../Styles/Styles.css";
const Statearray = () =>
{
const Array=[{
    id:101,
    name:"Venkat"},
{
    id:2,
    name:"Ravi"
}];

const [arr,setArr]=useState(Array);



function handleChange()
    {
        setArr((preArr)=>[
            ...preArr,
            {
                id:3,
                name:"Charan"
            }
        ]);
    }



    return(
<>
<h1 style={{textAlign:'center'}}>Using Array in useState</h1>

<div>

{
    arr.map((array,index)=>(

<p key={index}>

<h1>id:{array.id}</h1>
<h1>name:{array.name}</h1>
</p>
))}

<button onClick={handleChange}>Add Item</button>
</div>

</>

    )
}
export default Statearray;