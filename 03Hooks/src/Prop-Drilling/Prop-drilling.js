import "../App.css";
import React from "react";
// import ComponentA from "./ComponentA";
import ComponentC from "./ComponentC";
import UseContext from "./UseContext";

// for context Api
// 1. Import (createContext)

import { createContext } from "react";

// 2. Creating instance of createContext
export const Data = createContext();

const Main = () => {
  // 3. Wrap our component into Provider component
  const name = "Jaychavada";
  return (
    <>
      <header>Prop-Drilling</header>
      <Data.Provider value={name}>
        <ComponentC name={name} />
        <UseContext />
      </Data.Provider>
    </>
  );
};

export default Main;
