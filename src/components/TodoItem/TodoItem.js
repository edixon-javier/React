import React from "react";
import "./TodoItem.css";
import { BsFillHeartFill } from "react-icons/bs";
import { BsXCircle } from "react-icons/bs";

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        <BsFillHeartFill />
      </span>
      <p
        className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}
        onClick={onComplete}
      >
        {text}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        <BsXCircle />
      </span>
    </li>
  );
}

export { TodoItem };
