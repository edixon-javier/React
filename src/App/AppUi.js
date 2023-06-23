import React from "react";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import TodoLoading from "../components/TodoLoading/TodoLoading";
import TodoError from "../components/TodoError/TodoError";
import EmpyTodo from "../components/EmpyTodo.js/EmpyTodo";
import { TodoContext } from "../TodoContext/TodoContext";
import { Modal} from '../Modal/Modal';

function AppUi() {
  const {
    loading,
    error,
    searchedTodo,
    completeTodo,
    DeleteTodo,
    openModal,
    // setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <TodoLoading />}
        {error && <TodoError />}
        {!loading && searchedTodo.length === 0 && <EmpyTodo />}
        {searchedTodo.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => DeleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
      {openModal && <Modal>Hola mundo</Modal>}
    </>
  );
}

export { AppUi };
