import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddForm from "./components/AddForm";
import Notes from "./components/Notes";
import SignUp from "./components/SignUp";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <div className="app">
        <div className="content-wrapper">
          <div className="content">
            <Routes>
              <Route path="/" element={<SignUp />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/add" element={<AddForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </AuthContextProvider>
  );
}

export default App;
