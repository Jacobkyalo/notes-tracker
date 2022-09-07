import React, { createContext, useState, useEffect, useContext } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase.config";

const UserContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  //sigin user
  const singinUser = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  //logout user
  const logoutUser = () => {
    return signOut(auth);
  };

  //observer for currently signed user
  useEffect(() => {
    const unsubscribeUser = onAuthStateChanged(auth, (currentSiginedUser) => {
      setUser(currentSiginedUser);
    });

    return () => {
      unsubscribeUser();
    };
  }, []);

  const values = { user, singinUser, logoutUser };

  return (
    <>
      <UserContext.Provider value={values}>{children}</UserContext.Provider>
    </>
  );
};

export default AuthContextProvider;

export const useAuth = () => {
  return useContext(UserContext);
};
