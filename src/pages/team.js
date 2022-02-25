import React, { useState } from "react";
import { Link } from "react-router-dom";
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

function Team({ close, setClose, setNavbarVisible }) {
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
        <span className="text">Team</span>
      </motion.div>
      <motion.div variants={showAnim}>
        <div>
          <div className="p-4 mt-12 ">
            <p className="text-center text-3xl font-bold text-gray-800">
              Professional team
            </p>
            <p className="text-center mb-32 text-xl font-normal text-gray-500">
              Meat the best team in wolrd
            </p>
            <div className="flex m-auto w-full items-center space-y-24 md:space-y-0 flex-col md:flex-row justify-center">
              <div className="p-4 relative">
                <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
                  <a href="#" className="block relative">
                    <img
                      alt="profil"
                      src="https://saurabb.hostman.site/img6.jpeg"
                      className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"
                    />
                  </a>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24">
                  <div className="text-center">
                    <p className="text-2xl text-gray-800 dark:text-white">
                      Saurabh Yadav
                    </p>
                    <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                      Publicity Co-Head
                    </p>
                    <p className="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                      As a flourishing Frontend Web Developer and an aggressive
                      Thinker,I am capable of developing a web page or program
                      desired by hiring companies or an individual, working at
                      it`s full potential.
                    </p>
                  </div>
                  <div className="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-between">
                    <Link to="https://instagram.com/saurabh739?utm_medium=copy_link">
                      <i className="text-3xl hover:text-gray-800 text-stone-50 dark:hover:text-cyan-200 transition-colors duration-200 bx bxl-instagram"></i>
                    </Link>
                    <Link to="https://www.linkedin.com/in/saurabh-yadav-469323208">
                      <i className="text-3xl hover:text-gray-800 text-stone-50 dark:hover:text-cyan-200 transition-colors duration-200 bx bxl-linkedin"></i>
                    </Link>
                    <a href="mailto:Smyadav@gcoen.ac.in">
                      <i className="text-3xl hover:text-gray-800 text-stone-50 dark:hover:text-cyan-200 transition-colors duration-200 bx bxl-gmail"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4 relative">
                <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
                  <a href="#" className="block relative">
                    <img
                      alt="profil"
                      src="https://ujjwalsgupta.github.io/my-photo/Ujjwal_Gupta.png"
                      className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"
                    />
                  </a>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24">
                  <div className="text-center">
                    <p className="text-2xl text-gray-800 dark:text-white">
                      Ujjwal Gupta
                    </p>
                    <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                      Lead dev
                    </p>
                    <p className="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                      As a flourishing Frontend Web Developer and an aggressive
                      Thinker,I am capable of developing a web page or program
                      desired by hiring companies or an individual, working at
                      it`s full potential.
                    </p>
                  </div>
                  <div className="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-between">
                    <Link to=" https://instagram.com/ujjwalsgupta?utm_medium=copy_link">
                      <i className="text-3xl hover:text-gray-800 text-stone-50 dark:hover:text-cyan-200 transition-colors duration-200 bx bxl-instagram"></i>
                    </Link>
                    <Link to="https://www.linkedin.com/in/ujjwalsgupta">
                      <i className="text-3xl hover:text-gray-800 text-stone-50 dark:hover:text-cyan-200 transition-colors duration-200 bx bxl-linkedin"></i>
                    </Link>
                    <a href="mailto:usgupta@gcoen.ac.in">
                      <i className="text-3xl hover:text-gray-800 text-stone-50 dark:hover:text-cyan-200 transition-colors duration-200 bx bxl-gmail"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4 relative">
                <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
                  <a href="#" className="block relative">
                    <img
                      alt="profil"
                      src="https://adarshnjena.github.io/bio.github.io/assets/img/about2.jpg"
                      className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"
                    />
                  </a>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24">
                  <div className="text-center">
                    <p className="text-2xl text-gray-800 dark:text-white">
                      Adarsh Jena
                    </p>
                    <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                      Tech Co-Lead
                    </p>
                    <p className=" text-center text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                      As a developer,I specialize in creating modular and
                      scalable front-end architecture.I understand and respect
                      the fact, that there is a story behind every brand ,
                      behind every individual.
                    </p>
                  </div>
                  <div className="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-between">
                    <Link to="https://www.instagram.com/adarshnjena/">
                      <i className="text-3xl hover:text-gray-800 text-stone-50 dark:hover:text-cyan-200 transition-colors duration-200 bx bxl-instagram"></i>
                    </Link>
                    <Link to="https://www.linkedin.com/in/adarsh-jena-5ba295122/">
                      <i className="text-3xl hover:text-gray-800 text-stone-50 dark:hover:text-cyan-200 transition-colors duration-200 bx bxl-linkedin"></i>
                    </Link>
                    <a hrefL="mailto:adarshnjena@gmail.com">
                      <i className="text-3xl hover:text-gray-800 text-stone-50 dark:hover:text-cyan-200 transition-colors duration-200 bx bxl-gmail"></i>
                    </a>
                  </div>
                </div>
              </div>
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

export default Team;
