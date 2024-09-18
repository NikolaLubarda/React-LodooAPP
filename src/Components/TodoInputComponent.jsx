import React from "react";
import { useState } from "react";

const TodoInputComponent = ({ allTodo, setAllTodo }) => {
  const [currentTodo, setCurrentTodo] = useState("");

  function handleInput(e) {
    setCurrentTodo(e.target.value);
  }
  function handleAddTodo() {
    currentTodo === "" ? alert("upisite nesto") : console.log(currentTodo);

    setAllTodo([...allTodo, { todo: currentTodo, id: new Date().getTime() }]);

    setCurrentTodo("");
  }

  return (
    <div className=" container flex items-center justify-center mt-[20px]">
      <input
        placeholder="Enter your Todo..."
        type="text"
        className="bg-transparent border border-blue-200 px-[24px] py-[12px] rounded-lg placeholder:text-white text-white outline-none"
        onChange={handleInput}
        value={currentTodo}
      ></input>
      <button
        type="submit"
        className="bg-white px-[20px] py-[12px] 
      border border-blue-200 hover:bg-blue-700 hover:text-white rounded-lg"
        onClick={handleAddTodo}
      >
        {" "}
        Add Todo{" "}
      </button>
    </div>
  );
};

export default TodoInputComponent;
