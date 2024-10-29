// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-e83d0.firebaseapp.com",
  projectId: "mern-blog-e83d0",
  storageBucket: "mern-blog-e83d0.appspot.com",
  messagingSenderId: "263186784558",
  appId: "1:263186784558:web:3eacafbbcd23d6cd7e5abf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
