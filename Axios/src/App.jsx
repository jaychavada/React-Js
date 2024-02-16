import "./App.css";
import Headers from "./components/Headers";
import PostRequest from "./components/PostRequest";
import Title from "./components/Title";

function App() {
  return (
    <main>
      <Title />
      <Headers />
      <hr />
      <PostRequest />
    </main>
  );
}

export default App;
