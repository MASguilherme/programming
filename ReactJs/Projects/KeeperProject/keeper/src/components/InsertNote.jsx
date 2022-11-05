import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
function InsertNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [expand, setExpand] = useState();

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
      content: "",
    });
    event.preventDefault();
  }
  function expanded() {
    setExpand(true);
  }
  return (
    <section>
      <div className="form-container">
        <div className="form">
          <form>
            {expand ? (
              <input
                type="text"
                placeholder="Title"
                name="title"
                value={note.title}
                onChange={handleChange}
              />
            ) : null}
            <textarea
              onClick={expanded}
              placeholder="Take a note..."
              name="content"
              value={note.content}
              onChange={handleChange}
              rows="1"
            ></textarea>
            <Zoom in={expand}>
              <Fab onClick={submitNote}>
                <AddCircleIcon />
              </Fab>
            </Zoom>
          </form>
        </div>
      </div>
    </section>
  );
}

export default InsertNote;
