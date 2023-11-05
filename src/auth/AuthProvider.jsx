import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState({});
    console.log('current user is', user);
    // sign up with email and password
    const signupByemailAndpassowrd = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // update name and image
    const updateNameAndProfile = (updateInfo) => {
        console.log(updateInfo);
        return updateProfile(auth.currentUser, updateInfo);
    }
    // sign in or sign up with google
    const googleSignin = () => {
        return signInWithPopup(auth, googleProvider);
    }
    // sign in with email and password
    const signinwithEmailandPasswrd = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // user log out 
    const userLogout = () => {
        return signOut(auth);
    }
    // catch the current user
    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, user => {
          setUser(user);
        })
        return () => unSubscribe();
    }, [])
    const authInfo = {
        signupByemailAndpassowrd,
        updateNameAndProfile,
        googleSignin,
        signinwithEmailandPasswrd,
        userLogout,
        user,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;