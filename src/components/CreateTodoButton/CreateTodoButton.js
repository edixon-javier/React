import React, { useState } from "react";
import "./CreateTodoButton.css";
import { BsPlusLg } from "react-icons/bs";

function CreateTodoButton({ setOpenModal }) {


  return (
    <button
      className="CreateTodoButton"
      onClick={() => {
        setOpenModal((openModal) => !openModal);
      }}
    >
      <BsPlusLg />
    </button>
  );
}

export { CreateTodoButton };
//? este es un export nombrado
