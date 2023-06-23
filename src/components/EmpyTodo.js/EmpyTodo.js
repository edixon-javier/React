import React from 'react'
import './EmpyTodos.css'
function EmpyTodo() {
  return (
    <div className="empty-todos-container">
      <p>
        No hay tareas pendientes. ¡Aprovecha el tiempo para relajarte y
        disfrutar!
      </p>
    </div>
  );
}

export default EmpyTodo
