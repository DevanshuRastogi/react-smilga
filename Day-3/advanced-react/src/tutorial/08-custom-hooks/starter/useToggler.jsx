import { useState } from "react"

export  const useToggler = (someVal)=>{


    const [hide , setHide] = useState(someVal);

const toggleHide = () =>{

    setHide((prevHide) => !(prevHide));
}


return {hide , toggleHide};

}