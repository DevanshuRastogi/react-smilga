import React, { createContext, useContext, useState } from "react";
import NavLinks from "./NavLinks";

export const myNavBarContext = createContext(); 


export const customContext  = () => useContext(myNavBarContext);
const NavBar = () => {

  const [name, setName] = useState({ name: "parker" });

  const log = () => {
    setName(null);
  };
  return (
    <myNavBarContext.Provider value={ { name , log}}>


    <div>
      <nav className="navbar">
        <h5>context</h5>

        <NavLinks  />
      </nav>
    </div>
    </myNavBarContext.Provider>
  );
};

export default NavBar;
