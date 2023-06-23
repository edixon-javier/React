import React from "react";
import './CreateTodoButton.css'
import { BsPlusLg } from "react-icons/bs";

function CreateTodoButton() {
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => console.log("hola", event)}
    >
      <BsPlusLg />
    </button>
  );
}

export { CreateTodoButton };
//? este es un export nombrado