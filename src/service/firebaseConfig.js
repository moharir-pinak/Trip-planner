// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUjliyxhVsIuUdbW_u4bC2BxP7tui6T28",
  authDomain: "ai-trip-gen.firebaseapp.com",
  projectId: "ai-trip-gen",
  storageBucket: "ai-trip-gen.firebasestorage.app",
  messagingSenderId: "43912575106",
  appId: "1:43912575106:web:a6a9ec9555e636b4579c9b",
  measurementId: "G-NDQKYPW6GL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

 

