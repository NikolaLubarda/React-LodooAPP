import "./App.css";
import TodoInputComponent from "./Components/TodoInputComponent";
import TodoTaskComponent from "./Components/TodoTaskComponent";
import { useState } from "react";

function App() {
  const [allTodo, setAllTodo] = useState([]);
  return (
    <>
      <div className="container mx-auto">
        <div className="w-[60%] bg-blue-500 mx-auto mt-[100px] p-[20px] rounded-xl">
          <h1 className="text-center text-2xl text-white font-extrabold">
            {" "}
            Todo APP
          </h1>
          <TodoInputComponent allTodo={allTodo} setAllTodo={setAllTodo} />
          <TodoTaskComponent allTodo={allTodo} setAllTodo={setAllTodo} />
        </div>
      </div>
    </>
  );
}

export default App;
