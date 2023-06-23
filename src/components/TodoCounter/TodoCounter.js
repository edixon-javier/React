import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../../TodoContext/TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  const totalComplete = totalTodos === completedTodos;
  return (
    <>
      <div className="TodoCounter">
        <h2>
          Has Terminado <span>{completedTodos}</span> de{" "}
          <span>{totalTodos}</span> Tareas.
        </h2>
        {totalComplete && <h3>Felicitaciones terminaste tus tareas</h3>}
      </div>
    </>
  );
}

export { TodoCounter };
