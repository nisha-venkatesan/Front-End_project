// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWCWftAqddZpQGlBUuLzJki2Mglsu2cUI",
  authDomain: "livemusic-e034c.firebaseapp.com",
  projectId: "livemusic-e034c",
  storageBucket: "livemusic-e034c.firebasestorage.app",
  messagingSenderId: "1037580088651",
  appId: "1:1037580088651:web:049ab4acd58cd5f75b64ce",
  measurementId: "G-47LL0N1YC4"
};

// Initialize Firebase
const firebaseapp= initializeApp(firebaseConfig);
export let __AUTH=getAuth(firebaseapp);
export let __DB=getFirestore(firebaseapp);
export default firebaseapp;