import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import UseState from "./Hooks/UseState";
// import UseEffect from "./Hooks/UseEffect";
// import Propdrilling from "./Prop-Drilling/Prop-drilling"
// import UseReducer from "./Hooks/UseReducer";
// import UseRef from "./Hooks/UseRef";
import CustomHooks from "./Hooks/CustomHooks";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <UseState />
//   </React.StrictMode>
// );

// const useeffect = ReactDOM.createRoot(document.getElementById("useeffect"));
// useeffect.render(
//   <React.StrictMode>
//     <UseEffect />
//   </React.StrictMode>
// );

// const prop = ReactDOM.createRoot(document.getElementById("propdrilling"));
// prop.render(
//   <React.StrictMode>
//     <Propdrilling />
//   </React.StrictMode>
// );

// const usereducer = ReactDOM.createRoot(document.getElementById("usereducer"));
// usereducer.render(
//   <React.StrictMode>
//     <UseReducer />
//   </React.StrictMode>
// );

// const useref = ReactDOM.createRoot(document.getElementById("userefhook"));
// useref.render(
//   <React.StrictMode>
//     <UseRef/>
//   </React.StrictMode>
// );
const customh = ReactDOM.createRoot(document.getElementById("customhook"));
customh.render(
  <React.StrictMode>
    <CustomHooks/>
  </React.StrictMode>
);