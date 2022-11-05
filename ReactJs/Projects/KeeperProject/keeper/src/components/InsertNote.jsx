import React, { useState } from "react";

function InsertNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  return (
    <section>
      <div className="form-container">
        <div className="form">
          <form>
            <h1>Keep Note</h1>
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={note.title}
              onChange={handleChange}
            />
            <textarea
              placeholder="Take a note..."
              name="content"
              value={note.content}
              onChange={handleChange}
            ></textarea>
            <button onClick={submitNote}>Add</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default InsertNote;
