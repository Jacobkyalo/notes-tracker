import { deleteDoc, doc } from "firebase/firestore";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { db } from "../firebase.config";
import "../styles/Note.css";

const Note = ({ note }) => {
  const [notFull, setNotFull] = useState(true);

  //truncate description text
  const trimText = (str, n) => {
    return str.length > n ? str.substr(0, n) + "..." : str;
  };

  //delete a document
  const handleDelete = async (id) => {
    try {
      const noteSnapshot = doc(db, "notes", id);
      await deleteDoc(noteSnapshot);
      <Navigate to="/notes" />;
    } catch (error) {
      throw new Error("Document cannot be deleted 😏");
    }
  };

  return (
    <>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-content">
            <h1 className="card-title">{note.title}</h1>
            <h4 className="card-date">{note.date}</h4>
            <p className="card-description">
              {notFull ? trimText(note.description, 100) : note.description}{" "}
              <span onClick={() => setNotFull(!notFull)}>
                {notFull ? "More..." : "Less..."}
              </span>
            </p>
          </div>
          <p className="delete" onClick={() => handleDelete(note.id)}>
            &times;
          </p>
        </div>
      </div>
    </>
  );
};

export default Note;
