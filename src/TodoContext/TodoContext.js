import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();
function TodoProvider({ children }) {
  const { item, saveItem, loading, error } = useLocalStorage("TODOS_V1", []);
  const [searchValue, searchValueState] = React.useState("");
  const [openModal, setOpenModal] = React.useState(true);

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
    <TodoContext.Provider
      value={{
        completedTodos,
        totalTodos,
        searchValue,
        searchValueState,
        searchedTodo,
        completeTodo,
        DeleteTodo,
        loading,
        error,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
