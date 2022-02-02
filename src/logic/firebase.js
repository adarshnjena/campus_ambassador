import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmuEsUKaiPG4ZMJtK60lqpfkz0tIrqLeQ",
  authDomain: "fir-d7cd8.firebaseapp.com",
  projectId: "fir-d7cd8",
  storageBucket: "fir-d7cd8.appspot.com",
  messagingSenderId: "119551424225",
  appId: "1:119551424225:web:2e8f27522a4f70a33129a0",
  measurementId: "G-M4RPLRTND7",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
export const db = getFirestore();
export const auth = getAuth(app);

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider);
};
