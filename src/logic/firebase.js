import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";
import { taskComplitionData } from "../utils/taskComplitionData";
import projectData from "../utils/taskData";

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
export const auth = getAuth(app);

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider);
};

const db = getFirestore();
export const user_data = (user, userData) => {
  getDoc(doc(db, "users", user.uid)).then((docSnap) => {
    if (docSnap.exists()) {
      userData = docSnap.data();
      taskComplitionData.task1 = userData.task1;
      taskComplitionData.task2 = userData.task2;
      taskComplitionData.task3 = userData.task3;
      taskComplitionData.task4 = userData.task4;
      taskComplitionData.task5 = userData.task5;
    } else {
      setDoc(doc(db, "users", user.uid), {
        about: "",
        address: "",
        birth_year: "",
        city: "",
        college_name: "",
        country: "",
        first_name: "",
        last_name: "",
        postal_code: 1,
        task_complition_data: {
          task1: true,
          task2: false,
          task3: false,
          task4: false,
          task5: false,
        },
      });
    }
  });
};

export const update_user_data = (user, userData) => {
  setDoc(doc(db, "users", user.uid), {
    about: userData.about,
    address: userData.address,
    birth_year: userData.birth_year,
    city: userData.city,
    college_name: userData.college_name,
    country: userData.country,
    first_name: userData.first_name,
    last_name: userData.last_name,
    postal_code: userData.postal_code,
  });
};
