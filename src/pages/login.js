import React, { useEffect } from "react";
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

// * Start of Firebase
import "firebaseui/dist/firebaseui.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  EmailAuthProvider,
  PhoneAuthProvider,
} from "firebase/auth";
import { auth as fui_auth } from "firebaseui";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  // create a .env with the proper key
  apiKey: "AIzaSyCEh7vHPOJBbmCIZ_pHOqLnDBsKh5-UHBQ",
  authDomain: "adhyaaya-dev-env.firebaseapp.com",
  projectId: "adhyaaya-dev-env",
  storageBucket: "adhyaaya-dev-env.appspot.com",
  messagingSenderId: "299413973703",
  appId: "1:299413973703:web:76d391cfe68069db132ce2",
  measurementId: "G-Z9Z1GHE65D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// * End of Firebase

function Login({ _ }) {
  const slideLeft = () => {
    let container = document.getElementById("container");
    container.classList.add("sign-up-mode");
  };

  const slideRight = () => {
    let container = document.getElementById("container");
    container.classList.remove("sign-up-mode");
  };

  useEffect(() => {
    console.log("bruh");
    var uiConfig = {
      signInSuccessUrl: "/home",
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        GoogleAuthProvider.PROVIDER_ID,
        //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        //firebase.auth.GithubAuthProvider.PROVIDER_ID,
        EmailAuthProvider.PROVIDER_ID,
        PhoneAuthProvider.PROVIDER_ID,
        //firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
      ],
      // tosUrl and privacyPolicyUrl accept either url string or a callback
      // function.
      // Terms of service url/callback.
      tosUrl: "<your-tos-url>",
      // Privacy policy url/callback.
      privacyPolicyUrl: function () {
        window.location.assign("<your-privacy-policy-url>");
      },
    };

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new fui_auth.AuthUI(getAuth(app));
    // The start method will wait until the DOM is loaded.
    ui.start("#signin-signup", uiConfig);
  }, []);
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
              <div id="signin-signup" className="signin-signup"></div>
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
