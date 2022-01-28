import 'firebaseui/dist/firebaseui.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider, EmailAuthProvider, PhoneAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  // create a .env with the proper key
  apiKey: "AIzaSyCEh7vHPOJBbmCIZ_pHOqLnDBsKh5-UHBQ",
  authDomain: "adhyaaya-dev-env.firebaseapp.com",
  projectId: "adhyaaya-dev-env",
  storageBucket: "adhyaaya-dev-env.appspot.com",
  messagingSenderId: "299413973703",
  appId: "1:299413973703:web:76d391cfe68069db132ce2",
  measurementId: "G-Z9Z1GHE65D"
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);
export const firebaseanalytics = getAnalytics(firebaseapp);
export const firebaseauth = getAuth(firebaseapp);