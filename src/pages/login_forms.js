import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  loginAnim,
  slider,
  sliderContainer,
  showAnim,
} from "../logic/animations";
import "../style/login.scss";
import styled from "styled-components";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth, signInWithGoogle } from "../logic/firebase";

function Form() {
  const onClickButton = (e) => {
    e.preventDefault();
  };
  const slideLeft = () => {
    let container = document.getElementById("container");
    container.classList.add("sign-up-mode");
  };

  const slideRight = () => {
    let container = document.getElementById("container");
    container.classList.remove("sign-up-mode");
  };

  //firebase logic------------------
  let navigate = useNavigate();
  const redirect = (userData) => {
    if (userData) {
      navigate("home");
    }
  };

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    redirect(user);
  });

  const register = async () => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      const result2 = await updateProfile(result.user, {
        displayName: registerName,
      });
      console.log(result);
      console.log(result2);
      redirect(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  const [modelOpen, setModelOpen] = useState(false);

  const login = async () => {
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      // console.log(result);
      redirect(result);
    } catch (error) {
      console.log(error.message);
      setModelOpen(true);
      console.log(modelOpen);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  //firebase logic------------------

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
                <form action="/" className="sign-in-form">
                  {modelOpen ? (
                    <div
                      class="alertModel flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200"
                      role="alert"
                    >
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div class="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
                        Incorrect Email ID or password.
                      </div>
                      <button
                        onClick={() => {
                          setModelOpen(false);
                        }}
                        type="button"
                        class="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300"
                        data-collapse-toggle="alert-2"
                        aria-label="Close"
                      >
                        <span class="sr-only">Close</span>
                        <svg
                          class="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <></>
                  )}
                  <h2 className="title">Sign in</h2>
                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input
                      placeholder="Email..."
                      onChange={(event) => {
                        setLoginEmail(event.target.value);
                      }}
                    />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input
                      placeholder="Password..."
                      onChange={(event) => {
                        setLoginPassword(event.target.value);
                      }}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Login"
                    className="btn solid"
                    onClick={(e) => {
                      onClickButton(e);
                      login();
                    }}
                  />

                  <p className="social-text">Or Sign in with Google</p>
                  <div className="social-media">
                    {/* <a href="/" className="social-icon">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/" className="social-icon">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a onClick={signInWithGoogle} className="social-icon">
                      <i className="fab fa-google"></i>
                    </a>
                    <a href="/" className="social-icon">
                      <i className="fab fa-linkedin-in"></i>
                    </a> */}
                    <button
                      className="login-with-google-btn"
                      onClick={(e) => {
                        onClickButton(e);
                        signInWithGoogle();
                      }}
                    >
                      Sign in with Google
                    </button>
                  </div>
                </form>
                <form action="/" className="sign-up-form">
                  <h2 className="title">Sign up</h2>
                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input
                      placeholder="Name..."
                      onChange={(event) => {
                        setRegisterName(event.target.value);
                      }}
                    />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-envelope"></i>
                    <input
                      placeholder="Email..."
                      onChange={(event) => {
                        setRegisterEmail(event.target.value);
                      }}
                    />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input
                      placeholder="Password..."
                      onChange={(event) => {
                        setRegisterPassword(event.target.value);
                      }}
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn"
                    value="Sign up"
                    onClick={(e) => {
                      onClickButton(e);
                      register();
                    }}
                  />
                  <p className="social-text">Or Sign Up with Google</p>
                  <div className="social-media">
                    {/* <a href="/" className="social-icon">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/" className="social-icon">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a onClick={signInWithGoogle} className="social-icon">
                      <i className="fab fa-google"></i>
                    </a>
                    <a href="/" className="social-icon">
                      <i className="fab fa-linkedin-in"></i>
                    </a> */}
                    <button
                      className="login-with-google-btn"
                      onClick={(e) => {
                        onClickButton(e);
                        signInWithGoogle();
                      }}
                    >
                      Sign Up with Google
                    </button>
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
  top: 0px;
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

export default Form;
