import "../App.css";
import React from 'react'
import { useContext } from "react";
import { Data } from "./Prop-drilling";

const UseContext = () => {
    const userName = useContext(Data); 
  return (
    <>
    <h1>I'm {userName}</h1>
    </>
  )
}

export default UseContext