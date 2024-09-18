import React from "react";

const TodoTaskcomponent = ({ allTodo, setAllTodo }) => {
  function handleRemoveTodo(id) {
    console.log(id);

    let removeTodo = allTodo.filter((todo) => todo.id !== id);

    setAllTodo(removeTodo);
  }

  return (
    <div className="mt-20 flex flex-col gap-[15px]">
      {allTodo.map((todo) => (
        <div
          className="bg-blue-200 rounded-lg p-[15px] uppercase flex justify-between item-center"
          key={todo.id}
        >
          {todo.todo}
          <button
            onClick={() => handleRemoveTodo(todo.id)}
            className="p-[10px] bg-red-800 text-white rounded-lg"
          >
            Remove
          </button>
        </div>
      ))}

      {allTodo.length === 0 && (
        <h1 className="text-center text-white uppercase text-2xl">
          Dodaj neki Todo...
        </h1>
      )}
    </div>
  );
};

export default TodoTaskcomponent;
