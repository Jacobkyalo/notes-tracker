import React, { useEffect, useState } from "react";
import Note from "./Note";
import { ClipLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase.config";
import { useAuth } from "../contexts/AuthContext";
import "../styles/Notes.css";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  const override = {
    textAlign: "center",
    margin: "10px auto 0 auto",
  };

  const handleLogout = async () => {
    await logoutUser();
    navigate("/");
  };
  const fetchNotes = async () => {
    const notesCollectionRef = collection(db, "notes");
    const dataSnapshot = await getDocs(notesCollectionRef);
    setNotes(dataSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
  };

  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <>
      <header>
        <div className="header-upper">
          <h1 className="header-title">Notes Tracker</h1>
          <div className="user-logout">
            {showLogout && (
              <button
                className="logout-btn"
                type="button"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
            {user && (
              <img
                className="user-photo"
                onClick={() => setShowLogout(!showLogout)}
                src={
                  user.photoURL ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt="userPhoto"
              />
            )}
          </div>
        </div>

        <h2 className="header-subtitle">My Notes</h2>
      </header>
      {loading ? (
        <p style={override}>
          <ClipLoader loading={loading} size={40} color={"#fff"} />
        </p>
      ) : (
        <>
          {notes.length < 1 ? (
            <p>You have no notes 😈 please add some notes 🥰</p>
          ) : (
            <div className="notes-content">
              {notes.map((note) => (
                <Note key={note.id} note={note} />
              ))}
            </div>
          )}
        </>
      )}
      <Link to="/add">
        <button className="add">+</button>
      </Link>
    </>
  );
};

export default Notes;
