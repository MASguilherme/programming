import React, { useState } from "react";

function Form(props) {
  const [inputText, setInputText] = useState("");

  function hadleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input
        type="text"
        onChange={hadleChange}
        className="text-list"
        value={inputText}
        placeholder="Write a task"
      />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
        type="submit"
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default Form;
