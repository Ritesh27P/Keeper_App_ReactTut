import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, SetNotes] = useState([]);

  function AddNewNote(note) {
    SetNotes((prevNote) => [note, ...prevNote]);
    console.log(notes);
  }

  function DeleteNote(id) {
    SetNotes((prevData) => {
      return prevData.filter((value, index) => {
        if (index !== id) return value;
      });
    });
    console.log(notes);
  }

  return (
    <div>
      <Header />
      <CreateArea AddNote={AddNewNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note[0]}
          content={note[1]}
          AddNote={AddNewNote}
          deleteNote={DeleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
