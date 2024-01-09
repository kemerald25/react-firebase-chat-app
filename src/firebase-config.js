// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCVFvUjCnYksgjfr41MNnxFn75uBunRXZI",
  authDomain: "devchat-1de61.firebaseapp.com",
  projectId: "devchat-1de61",
  storageBucket: "devchat-1de61.appspot.com",
  messagingSenderId: "839983456417",
  appId: "1:839983456417:web:2b23a1096a8e810ec090e0",
  measurementId: "G-EZP8200D28"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();