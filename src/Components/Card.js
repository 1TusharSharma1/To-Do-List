import "./Card.css";
import React, { useState } from "react";

export default function Card() {
  const [task, setTask] = useState(" ");
  const [list, setList] = useState([]);

  const submitTaskHandler = (event) => {
    setTask(event.target.value);
  };

  const submitButtonHandler = () => {
    setList((oldList) => {
      return [...oldList, task];
    });
    setTask(" ");
  };

  return (
    <div className="Card">
      <div className="toDoList">
        <h1>To-Do List ✅</h1>
      </div>
      <div className="items">
        <h3>Add Items</h3>
        <input
          type="text"
          value={task}
          placeholder="Add Tasks"
          name="Add Items"
          id=""
          onChange={submitTaskHandler}
        />

        <button
          onClick={submitButtonHandler}
          className="add_item"
          type="submit"
        >
          +
        </button>
        </div>
        <div className="added-items">
          <ol>
            {list.map((value) => {
              return (
                <>
                  <div className="task">
                    <li>
                      {" "}
                      <i className="fa-solid fa-trash fa-lg"></i> {value}
                    </li>
                  </div>
                </>
              );
            })}
          </ol>
        </div>
      
    </div>
  );
}
