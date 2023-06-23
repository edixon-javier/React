import React from "react";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import TodoLoading from "../components/TodoLoading/TodoLoading";
import TodoError from "../components/TodoError/TodoError";
import EmpyTodo from "../components/EmpyTodo.js/EmpyTodo";

function AppUi({
  completedTodos,
  totalTodos,
  searchValue,
  searchValueState,
  searchedTodo,
  completeTodo,
  DeleteTodo,
  loading,
  error,
}) {
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        searchValueState={searchValueState}
      />
      <TodoList>
        {loading && <TodoLoading/>}
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
    </>
  );
}

export { AppUi };
