import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GithubAuthProvider,
  sendEmailVerification,
} from "firebase/auth";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  // register user with email and password
  function createUser(email, password) {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  // sign in user with eamil and password
  function signInUser(eamil, password) {
    setLoading(true);
    return signInWithEmailAndPassword(auth, eamil, password);
  }
  // verify eamil
  function verifyEmail() {
    return sendEmailVerification(auth.currentUser);
  }
  // register with google
  function signUpWithGoogle() {
    return signInWithPopup(auth, googleProvider);
  }
  // register with facebook
  function signUpWithFacebook() {
    return signInWithPopup(auth, facebookProvider);
  }
  // register with github
  function signUpWithGithub() {
    return signInWithPopup(auth, gitHubProvider);
  }
  // Log out user
  function logOutUser() {
    setLoading(true);
    return signOut(auth);
  }
  // oberving user
  useEffect(() => {
    const unsubScribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubScribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    verifyEmail,
    signInUser,
    signUpWithGoogle,
    signUpWithFacebook,
    signUpWithGithub,
    logOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
