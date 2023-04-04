import React from "react";
import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue}) {
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
