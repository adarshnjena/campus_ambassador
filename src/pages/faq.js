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
import { useState } from "react";
import FaqComponent from "../components/faq-form";
import Faq from "../components/faqDropDown";
import { faqData } from "../utils/faqData";


const config = {
  animate: true,
  arrowIcon: "V",
  tabFocus: true,
};

function FaqPage({ close, setClose, setNavbarVisible }) {
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
        className="app-navbar faq-app-navbar"
      >
        <i
          onClick={() => {
            setClose(!close);
          }}
          className="bx bx-menu"
        ></i>
        <span className="text">FAQs</span>
      </motion.div>
      <motion.div variants={showAnim}>
        <div className="tw-container tw-card tw-mx-4 tw-my-8"></div>
        <div className="tw-card lg:tw-card-side tw-card-bordered">
          <div className="tw-card-body tw-container">
            <h2 className="tw-card-title tw-container"></h2>
            {faqData.rows.map((item, i) => {
              return (
                <Faq key={i} title={item.title} data={item.content} />
              )
            })}
            <div className="tw-card-actions">
              <button className="tw-btn tw-btn-primary">Have a question not listed above ?</button>
            </div>
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

export default FaqPage;
