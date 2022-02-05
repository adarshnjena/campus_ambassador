import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  getFirestore,
  getDoc,
  setDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4WmTOsr8MSgVFAeyfPWzHzD7YLHX3Fws",
  authDomain: "caportal-adhyaaya.firebaseapp.com",
  projectId: "caportal-adhyaaya",
  storageBucket: "caportal-adhyaaya.appspot.com",
  messagingSenderId: "1055710245256",
  appId: "1:1055710245256:web:159593e0486e9121658a3d",
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
    } else {
      let Ca_code = user?.uid.slice(0, 7);
      setDoc(doc(db, "users", user?.uid), {
        about: "",
        address: "",
        city: "",
        college_name: "",
        country: "",
        first_name: "",
        last_name: "",
        phone: 1,
        task_complition_data: {
          task1: false,
          task2: false,
          task3: false,
          task4: false,
          task5: false,
        },
      });
      setDoc(doc(db, "uid_rel_with_ca_code", user.uid), {
        ca_code: Ca_code,
      });
      setDoc(doc(db, "ca_code", Ca_code), {
        number_of_regis: 0,
      });
    }
  });
};

export const update_user_data = (user, userData) => {
  updateDoc(doc(db, "users", user.uid), {
    about: userData.about,
    address: userData.address,
    city: userData.city,
    college_name: userData.college_name,
    country: userData.country,
    first_name: userData.first_name,
    last_name: userData.last_name,
    phone: userData.phone,
  });
};
