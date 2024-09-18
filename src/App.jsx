import "./App.css";
import TodoInputComponent from "./Components/TodoInputComponent";
import TodoTaskComponent from "./Components/TodoTaskComponent";

function App() {
  return (
    <>
      <div>
        <h1> Todo APP</h1>
        <TodoInputComponent />
        <TodoTaskComponent />
      </div>
    </>
  );
}

export default App;
