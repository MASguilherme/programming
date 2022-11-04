import React from "react";

function Note(props) {
  return (
    <div className="note-section">
      <div className="note-wrap">
        <div className="note">
          <h3>Title</h3>
          <p>Content lorem ispum para fortuna</p>
          <p>Delete</p>
        </div>
      </div>
    </div>
  );
}

export default Note;
