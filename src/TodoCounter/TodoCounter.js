import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter() {
  const {completedTodos, totalTodos} = React.useContext(TodoContext)
  return (
  <div>
    <h2>📑 Lista de Tareas </h2>
    <h2 className="Sub-title">¡Excelente! ¡Has completado {completedTodos} de las { totalTodos } Tareas de tu lista! </h2>
    <h4 className="content">¡Sigue así y estarás un paso más cerca de lograr todas tus metas! </h4>
  </div>
  );
}

export { TodoCounter };
