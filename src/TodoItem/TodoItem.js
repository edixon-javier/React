import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        onClick={props.onComplete}
        className={`Icon Icon-check ${props.complete && "Icon-check--active"}`}
      >
        ✓
      </span>
      <p className={`TodoItem-p ${props.complete && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span onClick={props.onDelete} className="Icon Icon-delete">
        ❌
      </span>
    </li>
  );
}

export { TodoItem };
