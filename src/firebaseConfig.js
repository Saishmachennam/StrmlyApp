// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC39js760IVjsEXI56o75GOX5Hw4eqGak8",
  authDomain: "strmlyapp-5136f.firebaseapp.com",
  projectId: "strmlyapp-5136f",
  storageBucket: "strmlyapp-5136f.firebasestorage.app",
  messagingSenderId: "1062766537969",
  appId: "1:1062766537969:web:babba79c6e4ce215020d50",
  measurementId: "G-E8YKG7C162"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
