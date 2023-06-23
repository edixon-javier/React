import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { AppUi } from "./AppUi";

function App() {
  const {item, saveItem, loading, error} = useLocalStorage('TODOS_V1', []);
  const [searchValue, searchValueState] = React.useState("");

  const searchedTodo = item.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...item];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveItem(newTodos);
  };

  const DeleteTodo = (text) => {
    const newTodos = [...item];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveItem(newTodos);
  };

  const completedTodos = item.filter((todo) => !!todo.completed).length;
  const totalTodos = item.length;

  return (
    <AppUi
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      searchValueState={searchValueState}
      searchedTodo={searchedTodo}
      completeTodo={completeTodo}
      DeleteTodo={DeleteTodo}
      loading={loading}
      error={error}
    />
  );
}

export default App;
