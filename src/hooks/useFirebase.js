import React from "react";
import { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const SignInwithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
    });
  };

  const LogOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return {
    user,
    SignInwithGoogle,
    LogOut,
  };
};

export default useFirebase;
