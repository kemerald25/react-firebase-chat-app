// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB0lwftO6dxR4DZuH3JPh-OYi0Q363uUc0",
  authDomain: "chat-app-9ca07.firebaseapp.com",
  projectId: "chat-app-9ca07",
  storageBucket: "chat-app-9ca07.appspot.com",
  messagingSenderId: "489223132432",
  appId: "1:489223132432:web:aac1d542b84421bb588195",
  measurementId: "G-9EP3ETQ05Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();