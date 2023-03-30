import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

function TodoSearch() {
  const { searchValue, setSearchValue} = React.useContext(TodoContext);
  
  const onChangeValueChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (<input  
    onChange={onChangeValueChange}
    value={searchValue}
    className="TodoSearch" placeholder="Buscar Tarea" />
  );
}

export { TodoSearch };
