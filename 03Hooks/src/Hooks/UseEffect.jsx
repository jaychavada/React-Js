import "../App.css";
import React, { useEffect, useState } from "react";

function UseEffect() {
  // const [state, setState] = useState(0);
  // // Main use of useEffect is to get or fetch data from APIs
  // useEffect(() => {
  //   console.log("useEffect called");
  // },[]);
  // // in above statement blank array used for rendering the useeffect for one time
  // console.log("Function body");

  const [state, setState] = useState(10);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );
        const data = await response.json();
      setData(data);
    }
    getData();
  },[state]);
  return (
    <>
    <header>useEffect</header>
      <button onClick={() => setState(state + 1)}>Click me {state}</button>
      {
        data.map((ele,index) => {
          return(
            <div className="apidata" key={index}>
              <h4>{ele.firstName}</h4>
              <h4>{ele.lastName}</h4>
              <h4>{ele.email}</h4>
            </div>
          )
        })
      }
    </>
  );
}

export default UseEffect;
