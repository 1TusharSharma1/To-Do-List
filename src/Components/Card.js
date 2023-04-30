import "./Card.css";
import React, { useState } from "react";
import ToDoList from "./ToDoList";

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

  const deleteTask = (id) => {
    console.log("Deleted!");
    setList((oldList)=>{
      return oldList.filter((arrElem, index)=>{
        return index !==id;
      })
    })
  };

  return (
    <div className="Card">
      <div className="toDoList">
        <h1>To-Do List ✅</h1>
      </div>
      <div className="items">
        <h3>Add Items 📝</h3>
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
          {list.map((value, index) => {
            return (
              <>
                <ToDoList 
                key={index}
                id = {index}
                text={value}  
                onSelect = {deleteTask}/>
              </>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
