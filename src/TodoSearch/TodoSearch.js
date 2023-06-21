import React from "react";
import './TodoSearch.css';

function TodoSearch({searchValue,
searchValueState}) {
 
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
