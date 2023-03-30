import React from "react";
import "./TodosLoanding.css";

function TodosLoanding() {
  return (
    <li className="TodoItem-loading">
        <div className="LoaderBalls">
            <span className="LoaderBalls__item"></span>
            <span className="LoaderBalls__item"></span>
            <span className="LoaderBalls__item"></span>
        </div>
    </li>

  );
}

export { TodosLoanding };
