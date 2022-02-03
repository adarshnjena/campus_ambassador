import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { auth } from "../logic/firebase";
import { onAuthStateChanged } from "firebase/auth";
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
        <span className="text">Campus Ambassador Program</span>
      </motion.div>
      <motion.div variants={showAnim}>
        <div className="mainDiv">
          <div
            class="mb-3 flex items-center justify-between bg-yellow-200 border-yellow-600 text-yellow-600 border-l-4 p-3"
            role="alert"
          >
            <p class="font-bold">Update Your Profile</p>
            <button
              type="submit"
              class="inline-flex items-center justify-center space-x-2 py-3 px-4 border border-transparent text-sm font-medium rounded text-yellow-600 hover:text-yellow-700 bg-yellow-50 hover:bg-yellow-100 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              >
                {" "}
                <circle cx="12" cy="8" r="5" />
                <path d="M3,21 h18 C 21,12 3,12 3,21" />
              </svg>{" "}
              <div>Update</div>
            </button>
          </div>

          <ColumnTwo>
            <Text>
              Good morning ,<span> {user?.displayName || user?.email}</span>
            </Text>
          </ColumnTwo>
          <ColumnOne>
            <ColumnThree>
              <Ranks></Ranks>
              <Info></Info>
            </ColumnThree>
            <Task seeAll={true}></Task>
          </ColumnOne>
          <ColumnOne>
            <ColumnThree>
              <CaCodeCard></CaCodeCard>
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
