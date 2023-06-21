import React from "react";
import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <>
      <div className="TodoCounter">
        <h1>Nuestra tareas</h1>
        <h2>
          Has Terminado <span>{completed}</span> de <span>{total}</span> Tareas.
        </h2>
      </div>
    </>
  );
}

export { TodoCounter };
