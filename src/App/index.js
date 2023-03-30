// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./appUI";


// const defaultTodos = [
//   {
//     text: "Tenicas de investigacion",
//     complete: true,
//   },
//   {
//     text: "Evalucion de proyectos",
//     complete: false,
//   },
//   {
//     text: "Contabilidad",
//     complete: false,
//   },
//   {
//     text: "Intro curso de react",
//     complete: false,
//   },
// ];



function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
