import { useState } from "react";
import Starter from "./tutorial/03-conditional-rendering/starter/07-user-challenge";
function App() {
  const [users, setUsers] = useState(null);

  const login = () => {
    setUsers("John");
  };
  const logout = () => {
    setUsers(null);
  };

  return (
    <div className="container">
      {users ? (
        <>
          <h4>hello there {users}</h4>
          <button className="btn" onClick={logout}> logout</button>
        </>
      ) : (
        <>
          {" "}
          <h4>Please Login</h4>
          <button className="btn" onClick={login}> login</button>
        </>
      )}
    </div>
  );
}

export default App;
