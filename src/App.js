import { TodoCounter } from "./TodoCounter/TodoCounter";
import { TodoSearch } from "./TodoSearch/TodoSearch";
import { TodoList } from "./TodoList/TodoList";
import { TodoItem } from "./TodoItem/TodoItem";
import { CreateTodoButton } from "./CreateTodoButton/CreateTodoButton";
import React from "react";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de intro a React", completed: false },
  { text: "Llorar con la llorona", completed: true },
  { text: "Hacer curso de ingles", completed: false },
  { text: "Usar estados", completed: false },
];

function App() {
  const [searchValue, searchValueState] = React.useState("");
  const [todos, setTodos] = React.useState(defaultTodos);

  const searchedTodo = todos.filter((todo) => {
    return todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
  });

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        searchValueState={searchValueState}
      />
      <TodoList>
        {searchedTodo.map((todo, index) => (
          <TodoItem key={index} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
