import React from "react";
import { useLocalStorage } from "./userLocalStorage";

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => !!todo.complete).length;
  const totalTodos = todos.length;

  let searchedtodos = [];

  if (!searchValue.length >= 1) {
    searchedtodos = todos;
  } else {
    searchedtodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].complete = true;
    saveTodos(newTodos);

    // todos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   complete: true,
    // };
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      complete: false,
      text,
    });
    saveTodos(newTodos);
  };

  // React.useEffect( () => {
  //   console.log('use effects');
  // }, [totalTodos])
  // //? Si o dejas vacio se renderiza una sola vez, pero si colocas algo dentro se ejecuta cuando este cambia

  return {
    error,
    loading,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedtodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    addTodo,
  };
}

export { useTodos };
