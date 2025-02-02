import { useState } from "react";
import { data } from "../../../data";
const UserChallenge = () => {
  const [user, setUser] = useState(data);
  const [name, setName] = useState("");
  console.log({ user });
  return (
    <div>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          if (name.trim() === "") return;

          const fakeId = Date.now();
          setUser([...user, { id: fakeId, name }]);
          setName("");
        }}
      >
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {user.map((person) => {
        return (
          <div key={person.id}>
            <h1 >{person.name}</h1>
            <button
              className="btn"
              onClick={()=>{
                setUser(user.filter((user)=>{
                  return user.id!=person.id;
                }))
              }}
            >
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
