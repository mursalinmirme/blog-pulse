import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // sign up with email and password
  const signupByemailAndpassowrd = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // update name and image
  const updateNameAndProfile = (updateInfo) => {
    console.log(updateInfo);
    return updateProfile(auth.currentUser, updateInfo);
  };
  // sign in or sign up with google
  const googleSignin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // sign in with email and password
  const signinwithEmailandPasswrd = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // user log out
  const userLogout = () => {
    return signOut(auth);
  };
  // catch the current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);
  const authInfo = {
    signupByemailAndpassowrd,
    updateNameAndProfile,
    googleSignin,
    signinwithEmailandPasswrd,
    userLogout,
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
