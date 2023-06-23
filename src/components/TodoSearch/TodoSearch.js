import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../../TodoContext/TodoContext";

function TodoSearch() {
  const { searchValue, searchValueState } = React.useContext(TodoContext);

  return (
    <input
      placeholder="Buscar Tarea"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => searchValueState(event.target.value)}
    />
  );
}

export { TodoSearch };
