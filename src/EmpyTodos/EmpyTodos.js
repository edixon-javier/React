import React from "react";
import './EmpyTodo.css'

function EmpyTodos() {
  return (
    <p className="Content">
      "Todavía no has agregado ninguna tarea a tu lista. ¡Añade una nueva tarea
      para comenzar a trabajar en ella de inmediato!"
    </p>
  );
}

export { EmpyTodos };
