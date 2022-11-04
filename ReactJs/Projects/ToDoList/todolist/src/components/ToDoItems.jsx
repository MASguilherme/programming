import React, { useState } from "react";

function ToDoItems(props) {
  const [isDone, setIsDone] = useState(false);

  function hadleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <div>
      <li
        onClick={hadleClick}
        style={{ textDecoration: isDone ? "line-through" : "none" }}
      >
        {props.text}
        <span onClick={()=>{
            props.onChecked(props.id);
        }}>🗑️</span>
      </li>

    </div>
  );
}

export default ToDoItems;
