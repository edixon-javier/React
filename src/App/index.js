// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { EmpyTodos } from "../EmpyTodos/EmpyTodos";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoError } from "../TodoError/TodoError";
import { TodoForm } from "../TodoForm/TodoForm";
import { TodoHeader } from "../TodoHeader/TodoHeader";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoList } from "../TodoList/TodoList";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodosLoanding } from "../TodosLoanding/TodosLoanding";
import { Modal } from "../modal";
import { useTodos } from "./useTodos";

function App() {
  const {
    error,
    loading,
    searchedtodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList>
        {error && <TodoError error={error} />}

        {loading && <TodosLoanding />}

        {!loading && !searchedtodos.length && <EmpyTodos />}

        {searchedtodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            complete={todo.complete}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export default App;
