import React, { useState } from "react";
import ToDoItems from "./ToDoItems";
import Form from "./Form";

function List() {
  const [items, setItems] = useState([]);

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }
  return (
    <div className="list-container">
      <div className="heading">
        <h1>To Do List</h1>
      </div>
      <Form onAdd={addItem} />
      <div className="items">
        <ul>
          {items.map((toDoItems, index) => {
            return (
              <ToDoItems
                key={index}
                id={index}
                text={toDoItems}
                onChecked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default List;
