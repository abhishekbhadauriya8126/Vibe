// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX5J-CxpyoXG3f-7j9HPC0Au11W6EKDr4",
  authDomain: "vibe-b6926.firebaseapp.com",
  projectId: "vibe-b6926",
  storageBucket: "vibe-b6926.appspot.com",
  messagingSenderId: "972839306669",
  appId: "1:972839306669:web:35e58bf955ad86a4470d24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };