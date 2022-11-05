import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {

  function handleClick(){
      props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <DeleteIcon className="delete-icon"onClick={handleClick}/>
    </div>
  );
}

export default Note;
