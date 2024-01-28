// This file is using customhook file : custom hook is : Usefetch file

import Usefetch from "./Usefetch";
import "../App.css";

const CustomHooks = () => {
  const [data] = Usefetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <div>
      <header>CustomHooks</header>
      <div className="finaldata">
        {data &&
          data.map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })}
      </div>
    </div>
  );
};

export default CustomHooks;
