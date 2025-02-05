import React, { useState } from "react";
import data from "../data";
// console.log(data);
const BirthdayList = () => {
  const [people, setPeople] = useState(data);
  return (
    <div className="container">
      <h3>{people.length} Birthdays Today</h3>

      {people.length == 0 ? (
        <button
          className="btn"
          onClick={() => {
            setPeople(data);
          }}
        >
          Set
        </button>
      ) : (
        <>
          {people.map((person) => {
            const { id, age, name, image } = person;
            return (
              <div className="person" key={id}>
                <img src={image} alt={name} />
                <div>
                  <h4>{name}</h4>
                  <p>{age} years </p>
                </div>
              </div>
            );
          })}

          <button
            className="btn"
            onClick={() => {
              setPeople([]);
            }}
          >
            Clear
          </button>
        </>
      )}
    </div>
  );
};

export default BirthdayList;
