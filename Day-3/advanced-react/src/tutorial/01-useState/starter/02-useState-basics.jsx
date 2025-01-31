import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{count}</h2>
      <button className="btn" onClick={() => setCount(count + 1)}>
        increment
      </button>
    </>
  );
};

export default UseStateBasics;
