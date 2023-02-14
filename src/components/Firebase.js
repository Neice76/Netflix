// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4xPBegoSRx6IAcE1aJTEPC93Rmo-75ao",
  authDomain: "netflixclone-2b817.firebaseapp.com",
  projectId: "netflixclone-2b817",
  storageBucket: "netflixclone-2b817.appspot.com",
  messagingSenderId: "475661612376",
  appId: "1:475661612376:web:322be198445f73bce1612d",
  measurementId: "G-5XXQ3WNT5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);