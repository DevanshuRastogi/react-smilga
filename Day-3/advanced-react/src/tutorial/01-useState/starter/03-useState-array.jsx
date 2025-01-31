import { useState } from "react";
import { data } from "../../../data";
const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <button
              onClick={() =>
                setPeople(people.filter((person) => person.id !== id))
              }
            >
              remove
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={()=>setPeople([])}> clear all</button>
    </>
  );
};

export default UseStateArray;
