import React from "react";

function Note(props) {

  function handleClick(){
      props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <p onClick={handleClick}>Delete</p>
    </div>
  );
}

export default Note;
