import React from "react";

function InsertNote() {
  return (
    <section>
      <div className="form-container">
        <div className="form">
          <h1>Keep Note</h1>
          <input type="text" placeholder="Write title" />
          <textarea placeholder="Write description"></textarea>
          <button type="submit">Add</button>
        </div>
      </div>
    </section>
  );
}

export default InsertNote;
