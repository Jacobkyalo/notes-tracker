import React, { useState } from "react";
import "../styles/AddForm.css";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <>
      <form>
        <h1>Add Notes</h1>
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
