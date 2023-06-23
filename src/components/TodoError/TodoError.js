import React from 'react'
import './TodoError.css'
function TodoError() {
  return (
    <div className="error-container">
      <h1>¡Ups! Algo salió mal.</h1>
      <p>Vuelve a intentarlo más tarde.</p>
    </div>
  );
}

export default TodoError
