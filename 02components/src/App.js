import "./App.css";
import { Header,Footer } from "./components/Header";
import Greet from "./components/FunctionalComponent";
import PropsFunc from "./components/PropsFunc";
import Welcome from "./components/ClassComponent";
import State from "./components/State";
import SetState from "./components/SetState";
import EventHandler from "./components/EventHandler";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBinding";

// const { func } = require("prop-types");

function App() {
  let login = true;
  return (
    <div className="App">
    {
      login === false? <Header/>:<h1>This is ternary operator</h1>
    }

    {
      (() => {
        if(login){
          return <h1>if else working</h1>
        }
        else{
          return <h1>not working</h1>
        }
      })()
    }
      <Header/>
      <Footer/>
      <Greet />

      <PropsFunc name="Tony" knownfor="Ironman">
        <p style={{color:"red"}}>Children</p>
      </PropsFunc>
      <PropsFunc name="Johnny" knownfor="JackSparrow">
        <button>Action</button>
      </PropsFunc>
      <PropsFunc name="Torreto" knownfor="Racer" />

      <Welcome name="Tony" knownfor="Ironman" />

      <State />
      <SetState />

      <EventHandler/>
      <ClassClick/>
      <EventBind/>
    </div>
  );
}

export default App;

// function App() {
//   const userinfo = [
//     {
//       usename: "Jay",
//       email: "abc@gmail.com",
//       location: "Mumbai",
//     },
//     {
//       usename: "Arun",
//       email: "abc@gmail.com",
//       location: "Delhi",
//     },
//     {
//       usename: "Dharmik",
//       email: "abc@gmail.com",
//       location: "Kalkatta",
//     },
//   ];
//   return (
//     <>
//       {userinfo.map((user) => (
//         <ul key={Math.random() * 10}>
//           <li>{user.usename}</li>
//           <li>{user.email}</li>
//           <li>{user.location}</li>
//         </ul>
//       ))}
//     </>
//   );
// }

// export default App;
