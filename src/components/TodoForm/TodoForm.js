import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../../TodoContext/TodoContext";
function TodoForm() {
  const { setOpenModal, addTodo } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Crea una nueva tarea</label>
      <textarea placeholder="Escribe tu nueva tarea" 
      value={newTodoValue}
      onChange={(e)=>setNewTodoValue(e.target.value)}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={() => setOpenModal(false)}
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
