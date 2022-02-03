import React from "react";
import { motion } from "framer-motion";
import {
  pageAnimation,
  titleAnim,
  slider,
  sliderContainer,
  showAnim,
} from "../logic/animations";
import styled from "styled-components";
import { auth } from "../logic/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CardSettings from "../components/CardSettings";
import CardProfile from "../components/CardProfile";
import { getFirestore, collection, getDoc, doc } from "firebase/firestore";

function Profile({ close, setClose, setNavbarVisible }) {
  setNavbarVisible(true);
  let userData = null;
  const [user, setUser] = useState(null);
  const [userCity, setUserCity] = useState("");
  const [userCountry, setUserCountry] = useState("");

  let navigate = useNavigate();
  const redirect = () => {
    navigate("/");
  };
  const getUsersData = async () => {
    getDoc(doc(db, "users", user?.uid)).then((docSnap) => {
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        userData = docSnap.data();
        setUserCity(userData.city);
        setUserCountry(userData.country);
      } else {
        console.log("No such document!");
      }
    });
  };
  const db = getFirestore();
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    console.log(currentUser.uid);
    getUsersData();
    setTimeout(() => {
      if (!currentUser) {
        setNavbarVisible(false);
        redirect();
      }
    }, 1000);
  });

  useEffect(() => {}, [userData]);
  const [modelOpen, setModelOpen] = useState(false);
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
        <span className="text">Profile</span>
      </motion.div>
      <motion.div variants={showAnim}>
        {modelOpen ? (
          <div
            className="flex p-4 mb-4 bg-green-100 border-t-4 border-green-500 dark:bg-green-200"
            role="alert"
            style={{
              margin: "auto",
              position: "fixed",
              top: "50px",
              left: "0",
              right: "0",
              width: "70vw",
              zIndex: "9999",
            }}
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-700"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div className="ml-3 text-sm font-medium text-green-700">
              Profile Updated Succefully
            </div>
            <button
              onClick={() => {
                setModelOpen(false);
              }}
              type="button"
              className="ml-auto -mx-1.5 -my-1.5 bg-green-100 dark:bg-green-200 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 dark:hover:bg-green-300 inline-flex h-8 w-8"
              data-collapse-toggle="alert-border-3"
              aria-label="Close"
            >
              <span className="sr-only">Dismiss</span>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        ) : (
          <></>
        )}
        <div className="flex flex-wrap mt-10">
          <div className="w-full lg:w-4/12 px-4">
            <CardProfile userCity={userCity} userCountry={userCountry} />
          </div>
          <div className="w-full lg:w-8/12 px-4">
            <CardSettings
              userCountry={userCountry}
              userCity={userCity}
              setModelOpen={setModelOpen}
              modelOpen={modelOpen}
            />
          </div>
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

export default Profile;
