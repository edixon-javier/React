import React from "react";
import './CreateTodoButton.css'

// const otrovalor  () = > {

// }
function CreateTodoButton() {
  return <button className="CreateTodoButton" onClick={(event) => console.log("hola", event)}>+</button>;
}

export { CreateTodoButton };
//? este es un export nombrado