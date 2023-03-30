import React from "react";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoList } from "../TodoList/TodoList";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { Modal } from "../modal";
import { TodoForm } from "../TodoForm/TodoForm";
import { TodoError } from "../TodoError/TodoError";
import { TodosLoanding } from "../TodosLoanding/TodosLoanding";
import { EmpyTodos } from "../EmpyTodos/EmpyTodos";

function AppUI() {
  const {
    error,
    loading,
    searchedtodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <TodoError error={error}/>}
        {loading && <TodosLoanding/> }
        {!loading && !searchedtodos.length && <EmpyTodos/>}

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
          <TodoForm/>
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };
