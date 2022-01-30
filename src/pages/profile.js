import React from "react";
import styles from "../style/profile.module.scss";

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
import { useState } from "react";

function Profile({ close, setClose, setNavbarVisible }) {
  setNavbarVisible(true);
  let navigate = useNavigate();
  const redirect = () => {
    navigate("/");
  };
  const [user, setUser] = useState(null);
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
        <span className="text"></span>
      </motion.div>
      <motion.div variants={showAnim}>
        <div className={`${styles["profile"]}`}>
          <form action="#" method="post">
            <div className={`${styles["headerbg"]}`}></div>
            <div className={`${styles["section_2"]}`}>
              <div className={`${styles["border1"]}`}></div>
              <img
                className={`${styles["imgcircle"]}`}
                src="https://picsum.photos/200"
              ></img>
              <div className={`${styles["title01"]}`}>
                <h1>My Profile</h1>
                <p>Update your photo and personal details.</p>
              </div>
              <div className={`${styles["button01"]}`}>
                <button type="button" className={`${styles["cancel"]}`}>
                  Cancel
                </button>
                <button type="submit" className={`${styles["save"]}`}>
                  Save
                </button>
              </div>
            </div>
            <div className={`${styles["section_3"]}`}>
              <h3>Name</h3>
              <input
                type="text"
                name="name"
                className={`${styles["name"]}`}
                placeholder="your name"
              ></input>
              <div className={`${styles["line"]}`}></div>
              <h3>CA-ID</h3>
              <input
                type="text"
                name="caid"
                className={`${styles["caid"]}`}
                placeholder="CA-*****"
                readOnly
              ></input>
              <div className={`${styles["line"]}`}></div>
              <div className={`${styles["photo001"]}`}>
                <h3>Your Photo</h3>
                <p>This will be displayed on your profile.</p>
              </div>
              <img src="https://picsum.photos/200"></img>

              <div className={`${styles["butts"]}`}>
                <button type="button" className={`${styles["delete"]}`}>
                  Delete
                </button>
                <label htmlFor="dp">Update</label>
                <input type="file" id="dp" />
              </div>
              <div className={`${styles["line"]}`}></div>
              <h3>E-Mail</h3>
              <input
                type="text"
                name="email"
                className={`${styles["email"]}`}
                placeholder="@xyz.com"
              ></input>
              <div className="line"></div>
              <h3>Contact No.</h3>
              <input
                type="tel"
                name="phone"
                className={`${styles["phone"]}`}
                maxLength="10"
                placeholder="+91 00000-00000"
              ></input>
              <div className={`${styles["line"]}`}></div>
              <h3>College</h3>
              <input
                type="text"
                name="college"
                className={`${styles["college"]}`}
                placeholder="your college"
              ></input>
              <div className="line"></div>
              <div className={`${styles["bio001"]}`}>
                <h3>Your Bio</h3>
                <p>Write a short introduction</p>
              </div>
              <textarea
                name="bio"
                className={`${styles["bio"]}`}
                placeholder="Type here!!"
              ></textarea>
            </div>
          </form>
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
