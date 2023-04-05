import React from "react";
import './TodoList.css';

function TodoList(props) {
  const renderFunc = props.children || props.render;
  return (
    <section className="TodoList-container"> 
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.totalTodos) && props.onEmpyTodos()}

      {(!!props.totalTodos && !props.searchedtodos.length) && props.onEmpySearchResults(props.searchText)}
      
      {(!props.loading && !props.error)  && props.searchedtodos.map(todo => renderFunc(todo))}
      
    </section>
  );
}

export { TodoList };
