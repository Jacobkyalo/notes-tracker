import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase.config";
import "../styles/AddForm.css";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const formValues = {
    title: title,
    description: description,
    //date: new Date().toDateString(),
  };

  const postNotes = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      return setError("Please enter all the fields 🥲");
    }
    const notesCollectionRef = collection(db, "notes");
    await addDoc(notesCollectionRef, formValues);
    setTitle("");
    setDescription("");
    navigate("/notes");
  };

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 1000);
  });
  return (
    <>
      <form onSubmit={postNotes}>
        <h1>Add Notes</h1>
        {error && <p style={{ color: "#ff0000" }}>{error}</p>}
        <label htmlFor="title">Title:</label>
        <p>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>
        <label htmlFor="description">Description:</label>
        <p>
          <textarea
            type="text"
            name="description"
            id="description"
            cols="30"
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </p>
        <button>Add Notes</button>
      </form>
    </>
  );
};

export default AddForm;
