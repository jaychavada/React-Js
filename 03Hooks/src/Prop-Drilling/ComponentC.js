// const ComponentC = ({ name }) => {
//   return (
//     <div>
//       <h1>Data is comming from ComponentA: {name}</h1>
//       <p>This method is getting data from component A then B then C</p>
//       <p>
//         Ye process jisme Component A se Component C me data transfer hua use
//         Prop-drilling Kehte hai!!
//       </p>
//     </div>
//   );
// };

// export default ComponentC;

import { Data } from "./Prop-drilling";

const ComponentC = () => {
  return (
    <>
      <div>
        <p>This is importing data method with use of createContext</p>
      </div>
      <Data.Consumer>
        {(name) => {
          return <h1>My name is : {name}</h1>;
        }}
      </Data.Consumer>
    </>
  );
};

export default ComponentC;
