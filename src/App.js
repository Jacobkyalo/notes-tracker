import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddForm from "./components/AddForm";
import Notes from "./components/Notes";
import ProectedRoute from "./components/ProectedRoute";
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
              <Route
                path="/notes"
                element={
                  <ProectedRoute>
                    <Notes />
                  </ProectedRoute>
                }
              />
              <Route
                path="/add"
                element={
                  <ProectedRoute>
                    <AddForm />
                  </ProectedRoute>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </AuthContextProvider>
  );
}

export default App;
