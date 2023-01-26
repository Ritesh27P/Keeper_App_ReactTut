import React, { useState } from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = useState("");
  const [title, setTitle] = useState("");

  function clickHandle(event) {
    props.AddNote([title, newNote]);
    setNewNote("");
    setTitle("");
    event.preventDefault();
  }

  function titleSetter(event) {
    setTitle(event.target.value);
  }

  function contentSetter(event) {
    setNewNote(event.target.value);
  }

  return (
    <div>
      <form>
        <input
          onChange={titleSetter}
          name="title"
          placeholder="Title"
          value={title}
        />
        <textarea
          onChange={contentSetter}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={newNote}
        />
        <button onClick={clickHandle}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
