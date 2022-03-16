import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { auth } from "../logic/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import {
  pageAnimation,
  titleAnim,
  slider,
  sliderContainer,
  showAnim,
} from "../logic/animations";
import styled from "styled-components";
import Ranks from "../components/Rank";
import Task from "../components/Project";
import Info from "../components/Info";
import CaCodeCard from "../components/caCode";
import CaLink from "../components/CaLink";
function Home({ close, setClose, setNavbarVisible }) {
  setNavbarVisible(true);
  let navigate = useNavigate();
  let userData = null;
  const [showUpdateprofile, setShowUpdateprofile] = useState(false);
  const [flag, setFlag] = useState(true);
  const [user, setUser] = useState(null);
  const [ca_code, setCa_code] = useState(null);
  const [num_of_paid_registrations, setNum_of_paid_registrations] =
    useState(null);
  const [num_of_tasks_completed, setNum_of_tasks_completed] = useState(null);
  const [rank, setRank] = useState(0);
  const redirect = () => {
    navigate("/");
  };
  const db = getFirestore();
  const getCaCode = async () => {
    getDoc(doc(db, "uid_rel_with_ca_code", user?.uid)).then((docSnap) => {
      if (docSnap.exists()) {
        setCa_code(docSnap.data().ca_code);
      } else {
        console.log("No such document!");
      }
    });
  };
  const getPaidRegis = async () => {
    getDoc(doc(db, "ca_code", ca_code)).then((docSnap) => {
      if (docSnap.exists()) {
        console.log(docSnap.data().num_of_paid_registrations);
        setNum_of_paid_registrations(docSnap.data().number_of_regis);
      } else {
        console.log("No such document!");
      }
    });
  };
  const getUsersData = async () => {
    getDoc(doc(db, "users", user?.uid)).then((docSnap) => {
      if (docSnap.exists()) {
        userData = docSnap.data();
        setRank(userData.rank);
        if (
          userData.city === "" ||
          userData.country === "" ||
          userData.birth_year === "" ||
          userData.college_name === "" ||
          userData.first_name === "" ||
          userData.last_name === "" ||
          userData.phone === 1
        ) {
          setShowUpdateprofile(true);
        }
        let count = 0;
        console.log(userData["task_complition_data"]);
        //docSnap['task_complition_data']
        for (let [key, value] of Object.entries(
          userData["task_complition_data"]
        )) {
          if (value === true) {
            count++;
            console.log(key, value);
          }
        }
        setNum_of_tasks_completed(count);
        //setNum_of_paid_registrations(count);
      } else {
        console.log("No such document!");
      }
    });
  };
  if (flag) {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      getUsersData();
      getCaCode();
      getPaidRegis();
      if (ca_code) {
        setFlag(false);
      }
      setTimeout(() => {
        if (!currentUser) {
          setNavbarVisible(false);
          redirect();
        }
      }, 1000);
    });
  }

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setTimeout(() => {
      if (!currentUser) {
        setNavbarVisible(false);
        redirect();
      }
    }, 1000);
  });
  return (
    <motion.section
      className="app-section"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <motion.div
        variants={titleAnim}
        initial="hidden"
        animate="show"
        className="app-navbar"
      >
        <i
          onClick={() => {
            setClose(!close);
          }}
          className="bx bx-menu"
        ></i>
        <span className="text">Campus Ambassador Program</span>
      </motion.div>
      <motion.div variants={showAnim}>
        <div className="mainDiv">
          {showUpdateprofile ? (
            <Link to={"/profile"} className="no-underline">
              <div
                className="flex items-center justify-between p-3 mb-3 text-yellow-600 bg-yellow-200 border-l-4 border-yellow-600"
                role="alert"
              >
                <p className="font-bold">Update Your Profile</p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-4 py-3 space-x-2 text-sm font-medium text-yellow-600 transition-colors border border-transparent rounded hover:text-yellow-700 bg-yellow-50 hover:bg-yellow-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  >
                    {" "}
                    <circle cx="12" cy="8" r="5" />
                    <path d="M3,21 h18 C 21,12 3,12 3,21" />
                  </svg>{" "}
                  <div>Update</div>
                </button>
              </div>
            </Link>
          ) : (
            <></>
          )}

          <ColumnTwo>
            <Text>
              Good morning ,<span> {user?.displayName || user?.email}</span>
            </Text>
          </ColumnTwo>
          <ColumnOne>
            <ColumnThree>
              <Ranks rank={rank}></Ranks>
              <Info
                num_of_paid_registrations={num_of_paid_registrations}
                num_of_tasks_completed={num_of_tasks_completed}
              ></Info>
            </ColumnThree>
            <Task seeAll={true}></Task>
          </ColumnOne>
          <ColumnOne>
            <ColumnThree>
              <CaCodeCard ca_code={ca_code}></CaCodeCard>
            </ColumnThree>
            <CaLink />
          </ColumnOne>
        </div>
      </motion.div>
    </motion.section>
  );
}

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 150vw;
  height: 150vh;
  background: #fffebf;
  z-index: 50;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
const Text = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  span {
    font-weight: 500;
    color: #484258;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 1rem;
  }
`;
const ColumnOne = styled.div`
  display: flex;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    width: 90vw;
  }
`;
const ColumnTwo = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const ColumnThree = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    justify-content: center;
    align-items: center;
  }
`;
// const InputContainer = styled.div`
//   display: flex;
// `;

// const Icon = styled.div`
//   height: 3rem;
//   width: 3rem;
//   background-color: #dce4ff;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-top-left-radius: 0.5rem;
//   border-bottom-left-radius: 0.5rem;
//   svg {
//     color: #555555;
//   }
// `;
// const Input = styled.input`
//   border: none;
//   background-color: #dce4ff;
//   border-top-right-radius: 0.5rem;
//   border-bottom-right-radius: 0.5rem;
//   color: #464646;

//   &:focus {
//     border: none;
//     outline: none;
//   }
// `;

export default Home;
