import "../App.css";
import Header from "../components/Header";
import React, { useState } from "react";

function UseState() {
  // for changing integer data
  const [num, setNum] = useState(1);
  function inc() {
    setNum(num + 1);
  }
  function dec() {
    setNum(num - 1);
  }

  // for string data changing
  const [uname, setUname] = useState("unknown");
  const changeName = () => {
    setUname("Jaychavada");
  };

  // changing calue in set of array...
  const [friends, setFriends] = useState(["Dean", "Roman"]);

  const addone = () => {
    setFriends([...friends,"Jay"]);
  };
  const removeone = () => {
    setFriends(friends.filter((f)=> f!== "Jay"));
  };
  const updateone = () => {
    setFriends(friends.map((f)=> (f === "Dean"?"The rock":f)));
  };
  // change rating with use of object properties in useState
  const [movie,setMovie] = useState({
    title: "Fast X",
    ratings: 9.5,
  });

  const updateratings = () => {
    const copyMovie = {
      ...movie,
      ratings: 9.99,
    }
    setMovie(copyMovie);
  }
  return (
    <div className="App">
      <Header />
      <header>UseState</header>
      <div className="main">
        <h1 className="heading">
          {num},{uname}
        </h1>
        <div className="buttons">
          <button onClick={inc}>Increment</button>
          <button onClick={dec}>Decrement</button>
          <button onClick={changeName}>ChangeName</button>
        </div>
      </div>
      <div className="main2">
        {friends.map((f) => (
          <li key={Math.random()}>{f}</li>
        ))}
        <button onClick={addone}>Add one</button>
        <button onClick={removeone}>Remove one</button>
        <button onClick={updateone}>Update one</button>

        <h1>{movie.title}</h1>
        <h2>{movie.ratings}</h2>
        <button onClick={updateratings}>Update ratings</button>
      </div>
    </div>
  );
}

export default UseState;
