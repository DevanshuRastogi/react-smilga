import { useState } from 'react';


const UseStateObject = () => {

  const [data  , setData] = useState({
    name:"",
    age : null,
    hobby: "",
  })
  const [toggle , setToggle] =useState(false);
const handleClick= ()=>{
 if (!toggle){
  setData({
    name:"Dev",
    age : 21,
    hobby: "Sleeping",
  })
  setToggle(true);
 }
 else{
  setData([]),
  setToggle(false);
 }
}

  const {name , age , hobby} = data;
  return <>

  <h2>{name}</h2>
  <h2>{age}</h2>
  <h2> likes : {hobby}</h2>

  <button className='btn' onClick={handleClick}>click to change</button>
  
  </>;
};

export default UseStateObject;
