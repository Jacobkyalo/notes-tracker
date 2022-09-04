import React, { useState } from "react";
import Note from "./Note";
import "../styles/Notes.css";

const Notes = () => {
  const [notes, setNotes] = useState([
    {
      title: "What is programming",
      description:
        "        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempore ducimus blanditiis corporis dignissimos nulla totam eos modi obcaecati, molestias, facere assumenda, vero perferendis laudantium reiciendis perspiciatis! Quae, ullam natus.",
      date: "12-09-2022",
    },
    {
      title: "What is programming",
      description:
        "        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempore ducimus blanditiis corporis dignissimos nulla totam eos modi obcaecati, molestias, facere assumenda, vero perferendis laudantium reiciendis perspiciatis! Quae, ullam natus.",
      date: "12-09-2022",
    },
    {
      title: "What is programming",
      description:
        "        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempore ducimus blanditiis corporis dignissimos nulla totam eos modi obcaecati, molestias, facere assumenda, vero perferendis laudantium reiciendis perspiciatis! Quae, ullam natus.",
      date: "12-09-2022",
    },
  ]);
  return (
    <>
      <header>
        <h1 className="header-title">Notes Tracker</h1>
        <h2 className="header-subtitle">My Notes</h2>
      </header>
      <div className="notes-content">
        {notes.map((note) => (
          <>
            <Note key={note.id} note={note} />
          </>
        ))}
      </div>
    </>
  );
};

export default Notes;
