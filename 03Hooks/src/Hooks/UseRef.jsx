import "../App.css";
import React from "react";
import { useRef } from "react";

const UseRef = () => {
  const inputElement = useRef();
  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "Jay";
  };
  return (
    <div>
      <header>UseRef</header>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus n write</button>
    </div>
  );
}

export default UseRef;

/*

// useRef hook allows us to access properties of DOM element.useful when we need to access value of an element or the current dimensions of the element.

*/