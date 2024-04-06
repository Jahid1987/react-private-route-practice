// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNCjkg7d3xKcxVABU73FNuiGw-MZLt7wk",
  authDomain: "react-private-route-7da9e.firebaseapp.com",
  projectId: "react-private-route-7da9e",
  storageBucket: "react-private-route-7da9e.appspot.com",
  messagingSenderId: "213614475894",
  appId: "1:213614475894:web:5ca3efcbafb565b4627d57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
