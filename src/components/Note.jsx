import React, { useState } from "react";
import "../styles/Note.css";

const Note = ({ note }) => {
  const [showFull, setShowFull] = useState(true);

  const trimText = (str, n) => {
    return str.length > n ? str.substr(0, n) + "..." : str;
  };
  return (
    <>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-content">
            <h1 className="card-title">{note.title}</h1>
            <h4 className="card-date">{note.date}</h4>
            <p className="card-description">
              {showFull ? trimText(note.description, 100) : note.description}{" "}
              <span onClick={() => setShowFull(!showFull)}>
                {showFull ? "More..." : "Less..."}
              </span>
            </p>
          </div>
          <p className="delete">&times;</p>
        </div>
      </div>
    </>
  );
};

export default Note;
