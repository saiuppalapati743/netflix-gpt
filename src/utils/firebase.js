// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz5aOFMkFprjhUDh3bj3eLNL8USTldmD4",
  authDomain: "netflixgpt-4efce.firebaseapp.com",
  projectId: "netflixgpt-4efce",
  storageBucket: "netflixgpt-4efce.firebasestorage.app",
  messagingSenderId: "813229134919",
  appId: "1:813229134919:web:eeb522379c05bc7df10d62",
  measurementId: "G-YLCX53LX7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();