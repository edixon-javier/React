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
import { ChangeListener } from "../ChangeAlert/ChangeAlert";

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
    sincronizeTodos,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedtodos={searchedtodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodoError />}
        onLoading={() => <TodosLoanding />}
        onEmpyTodos={() => <EmpyTodos />}
        onEmpySearchResults={(searchText) => (
          <p>No existen tareas para {searchText} </p>
        )}
        render={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            complete={todo.complete}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      >
        {/* {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            complete={todo.complete}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )} */}
        {/* lo comentado solo funcionara cuando sea props.children el otro props.render */}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
      <ChangeListener sincronize={sincronizeTodos} />
    </React.Fragment>
  );
}

export default App;
