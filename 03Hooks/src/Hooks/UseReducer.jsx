import "../App.css";
import React from "react";
import { useReducer } from "react";

// state:
// dispatch: Allow us to change state data. like : [value,setValue] so here we can sya that dispatch method is setValue.

// reducer: contains custom state logic
// initialState: contians an object

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <header>useReducer</header>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "reset":
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

export default UseReducer;

/* 

usereducer hook is similar to usestate but it is designed for more complex state objects or state transitions that involve multiple sub-values.

*/
