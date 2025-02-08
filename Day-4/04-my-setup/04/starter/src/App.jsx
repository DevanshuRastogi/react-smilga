import { useState } from "react";
import questions from "./data";

const App = () => {
  const [activeId, setActiveId] = useState(null);

  const handleShow = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="container">
      <h1>Questions</h1>
      {questions.map(({ id, info, title }) => (
        <div key={id} className="question">
          <div className="header">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h5>{title}</h5>
              <button className="question-btn" onClick={() => handleShow(id)}>
                {activeId === id ? "-" : "+"}
              </button>
            </div>
            {activeId === id && <p>{info}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
