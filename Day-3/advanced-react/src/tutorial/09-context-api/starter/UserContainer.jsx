import React, { useContext } from "react";
import { customContext, myNavBarContext } from "./NavBar";



const UserContainer = () => {
    const {name , log} = customContext();
  return (
    <div className="user-container">
      {name ? (
        <>
          <p>Hello There, {name.name.toUpperCase()}</p>
          <button className="btn" onClick={log}>Login</button>
        </>
      ) : (
        <>Please login</>
      )}
    </div>
  );
};

export default UserContainer;
