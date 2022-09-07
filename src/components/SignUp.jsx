import React from "react";
import "../styles/SignUp.css";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { singinUser } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    await singinUser();
    navigate("/notes");
  };

  return (
    <div className="signup-wrapper">
      <div className="signup">
        <h1>Welcome,</h1>
        <p>Signup to continue</p>
        <button onClick={handleSignIn}>Continue With Google</button>
      </div>
    </div>
  );
};

export default SignUp;
