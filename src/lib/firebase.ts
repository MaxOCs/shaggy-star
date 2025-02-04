// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBvsU9Yjzyqko0zLEQoY-GVAe3b8bOXq-4",
    authDomain: "app-tutorial-92af2.firebaseapp.com",
    projectId: "app-tutorial-92af2",
    storageBucket: "app-tutorial-92af2.firebasestorage.app",
    messagingSenderId: "207194988590",
    appId: "1:207194988590:web:2edfda9fe3458a17523fbf"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Firebase initialized");

export { db ,app };
