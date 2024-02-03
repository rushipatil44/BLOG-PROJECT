// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "self-mern-blog.firebaseapp.com",
  projectId: "self-mern-blog",
  storageBucket: "self-mern-blog.appspot.com",
  messagingSenderId: "184646157357",
  appId: "1:184646157357:web:088e85b52cdcc5240964a4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);