import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsJwFNnPhYFuKmlzj90H44o9LDu6qK9eQ",
  authDomain: "finance-flow-59222.firebaseapp.com",
  projectId: "finance-flow-59222",
  storageBucket: "finance-flow-59222.firebasestorage.app",
  messagingSenderId: "718558689282",
  appId: "1:718558689282:web:0a75035d78a2d2e2664f1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);