// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyV8eV1Q2vD4BJwFE4Yxm6tfDQoU607Lc",
  authDomain: "discord-clone-817f8.firebaseapp.com",
  projectId: "discord-clone-817f8",
  storageBucket: "discord-clone-817f8.appspot.com",
  messagingSenderId: "691327764346",
  appId: "1:691327764346:web:73673edc2e433ddc3238c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };