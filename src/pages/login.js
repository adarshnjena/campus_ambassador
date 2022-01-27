import React from "react";
import "../style/login.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  loginAnim,
  slider,
  sliderContainer,
  showAnim,
} from "../logic/animations";
import styled from "styled-components";

function Login({ navbarVisible, setNavbarVisible }) {
  const slideLeft = () => {
    let container = document.getElementById("container");
    container.classList.add("sign-up-mode");
  };

  const slideRight = () => {
    let container = document.getElementById("container");
    container.classList.remove("sign-up-mode");
  };
  return (
    <motion.div variants={loginAnim} initial="hidden" animate="show">
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <motion.div variants={showAnim}>
        <div>
          <div id="container">
            <div className="forms-container">
              <div className="signin-signup">
                <form className="sign-in-form">
                  <h2 className="title">Sign in</h2>
                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Username" />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" />
                  </div>
                  <Link
                    onClick={() => {
                      setNavbarVisible(true);
                    }}
                    to="/home"
                    className="link solid"
                  >
                    Login
                  </Link>
                  <p className="social-text">
                    Or Sign in with social platforms
                  </p>
                  <div className="social-media">
                    <a href="/" className="social-icon">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/" className="social-icon">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="/" className="social-icon">
                      <i className="fab fa-google"></i>
                    </a>
                    <a href="/" className="social-icon">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </form>
                <form className="sign-up-form">
                  <h2 className="title">Sign up</h2>
                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Username" />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-envelope"></i>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" />
                  </div>
                  <Link
                    onClick={() => {
                      setNavbarVisible(true);
                    }}
                    to="/home"
                    className="solid"
                  >
                    Sign Up
                  </Link>
                  <p className="social-text">
                    Or Sign up with social platforms
                  </p>
                  <div className="social-media">
                    <a href="/" className="social-icon">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/" className="social-icon">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="/" className="social-icon">
                      <i className="fab fa-google"></i>
                    </a>
                    <a href="/" className="social-icon">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </form>
              </div>
            </div>

            <div className="panels-container">
              <div className="panel left-panel">
                <div className="content">
                  <h3>New here ?</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Debitis, ex ratione. Aliquid!
                  </p>
                  <button
                    onClick={slideLeft}
                    className="btn transparent"
                    id="sign-up-btn"
                  >
                    Sign up
                  </button>
                </div>
                <img
                  src="https://thetravelights.com/wp-content/uploads/2020/10/tech-web-app-development-1536x1536.png"
                  className="image"
                  alt=""
                />
              </div>
              <div className="panel right-panel">
                <div className="content">
                  <h3>One of us ?</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum laboriosam ad deleniti.
                  </p>
                  <button
                    onClick={slideRight}
                    className="btn transparent"
                    id="sign-in-btn"
                  >
                    Sign in
                  </button>
                </div>
                <img
                  src="https://www.07heavenmarketing.co.uk/hubfs/07_Shadowing_Image01-01.png"
                  className="image"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
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

export default Login;
