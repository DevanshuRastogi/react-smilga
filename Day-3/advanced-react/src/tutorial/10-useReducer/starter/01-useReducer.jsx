import React, { useReducer } from "react";
import { data, people } from "../../../data";
import { RESET_LIST } from "../final/actions";
const defaultState = {
  people: data,
};

const CLEAR_LIST = "CLEAR_LIST";
const SET_LIST = "SET_LIST";
const REMOVE_LIST = "REMOVE_LIST";


const ReducerBasics = () => {
  const reducingFn = (state, action) => {
    if (action.type === CLEAR_LIST) {
      return { ...state, people: [] };
    }
    if (action.type === SET_LIST) {
      return { ...state, people: data };
    }
    if (action.type === REMOVE_LIST) {
      const newList = state.people.filter(
        (person) => person.id != action.payload.id
      );
      return { ...state, people: newList };
    }
  };
  const [state, dispatch] = useReducer(reducingFn, defaultState);

  return (
    <div>
      {state.people.length != 0 ? (
        <>
          {state.people.map((person) => {
            const { id, name } = person;
            return (
              <div key={id} className="item">
                <h4>{name}</h4>
                <button
                  onClick={() =>
                    dispatch({ type: REMOVE_LIST, payload: { id } })
                  }
                >
                  remove
                </button>
              </div>
            );
          })}
          <button
            className="btn"
            style={{ marginTop: "2rem" }}
            onClick={() => dispatch({ type: CLEAR_LIST })}
          >
            clear items
          </button>
        </>
      ) : (
        <>
          <button
            className="btn"
            style={{ marginTop: "2rem" }}
            onClick={() => dispatch({ type: SET_LIST })}
          >
            Reset
          </button>
        </>
      )}
    </div>
  );
};

export default ReducerBasics;
