import React from "react";
import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  const totalComplete = (total === completed)
  return (
    <>
      <div className="TodoCounter">
        <h2>
          Has Terminado <span>{completed}</span> de <span>{total}</span> Tareas.
        </h2>
        {totalComplete && <h3>Felicitaciones terminaste tus tareas</h3>}
      </div>
    </>
  );
}

export { TodoCounter };
 