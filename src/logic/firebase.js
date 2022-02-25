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
  apiKey: "AIzaSyCIfzWW2ATPtfMb0SEoNU1jKZiwSWiDFHc",
  authDomain: "adhyaayacadashboard.firebaseapp.com",
  projectId: "adhyaayacadashboard",
  storageBucket: "adhyaayacadashboard.appspot.com",
  messagingSenderId: "539794070537",
  appId: "1:539794070537:web:3006eac4c3278f13b96cd8",
  measurementId: "G-FV7Z4VPD6P",
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
    let rank = 0;
    getDoc(doc(db, "count", "1")).then((docSnap_cnt) => {
      console.log(docSnap_cnt.data().count);
      rank = docSnap_cnt.data().count;
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
          rank: rank,
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
      setDoc(doc(db, "count", "1"), {
        count: rank + 1,
      });
    });
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

export async function update_task_data(user, task_id) {
  let snapshot = await getDoc(doc(db, "users", user.uid));
  let data = snapshot.data();
  data["task_complition_data"][`task${task_id}`] = true;
  updateDoc(doc(db, "users", user.uid), data);
}
