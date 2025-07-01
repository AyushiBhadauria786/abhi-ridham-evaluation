// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU63raw4FFF0xZ1axYzl6JhF5KejkeGK0",
  authDomain: "financeflow-c9f96.firebaseapp.com",
  projectId: "financeflow-c9f96",
  storageBucket: "financeflow-c9f96.firebasestorage.app",
  messagingSenderId: "1086574091808",
  appId: "1:1086574091808:web:29f4c2b96ac59673d5a645",
  measurementId: "G-XS0L5KQRDC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);