import React, { useState } from "react";
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
          <div className="p-4 ">
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
                      src="https://firebasestorage.googleapis.com/v0/b/web-dev-demo-adarsh.appspot.com/o/pexels-sheep-1846422.jpg?alt=media&token=998a0c9a-5562-47de-8dac-f726d973bfb7"
                      className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800 mask mask-decagon"
                    />
                  </a>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24">
                  <div className="text-center">
                    <p className="text-2xl text-gray-800 dark:text-white">
                      Patrick Sebastien
                    </p>
                    <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                      Developpeur
                    </p>
                    <p className="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                      Patrick Sébastien, born November 14, 1953 in
                      Brive-la-Gaillarde, is an imitator.
                    </p>
                  </div>
                  <div className="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-between">
                    <a href="#">
                      <svg
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                      </svg>
                    </a>

                    <a href="#">
                      <svg
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4 relative">
                <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
                  <a href="#" className="block relative">
                    <img
                      alt="profil"
                      src="https://firebasestorage.googleapis.com/v0/b/web-dev-demo-adarsh.appspot.com/o/pexels-sheep-1846422.jpg?alt=media&token=998a0c9a-5562-47de-8dac-f726d973bfb7"
                      className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"
                    />
                  </a>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24">
                  <div className="text-center">
                    <p className="text-2xl text-gray-800 dark:text-white">
                      Charlie
                    </p>
                    <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                      Lead dev
                    </p>
                    <p className="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                      Charlie, born December 18, 1993 in Challans, is an
                      imitator and pintor.
                    </p>
                  </div>
                  <div className="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-between">
                    <a href="#">
                      <svg
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                      </svg>
                    </a>

                    <a href="#">
                      <svg
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 relative">
                <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
                  <a href="#" className="block relative">
                    <img
                      alt="profil"
                      src="https://firebasestorage.googleapis.com/v0/b/web-dev-demo-adarsh.appspot.com/o/pexels-sheep-1846422.jpg?alt=media&token=998a0c9a-5562-47de-8dac-f726d973bfb7"
                      className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800 mask mask-decagon"
                    />
                  </a>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24">
                  <div className="text-center">
                    <p className="text-2xl text-gray-800 dark:text-white">
                      Thierry Halliday
                    </p>
                    <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                      CTO
                    </p>
                    <p className="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                      Thierry Halliday, born November 4, 1993 in Saint hilaire
                      de riez, is css specialist.
                    </p>
                  </div>
                  <div className="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-between">
                    <a href="#">
                      <svg
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                      </svg>
                    </a>

                    <a href="#">
                      <svg
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex m-auto mt-24 w-full items-center space-y-24 md:space-y-0 flex-col md:flex-row justify-center">
              <div className="p-4 relative">
                <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
                  <a href="#" className="block relative">
                    <img
                      alt="profil"
                      src="https://firebasestorage.googleapis.com/v0/b/web-dev-demo-adarsh.appspot.com/o/pexels-sheep-1846422.jpg?alt=media&token=998a0c9a-5562-47de-8dac-f726d973bfb7"
                      className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"
                    />
                  </a>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24">
                  <div className="text-center">
                    <p className="text-2xl text-gray-800 dark:text-white">
                      Patrick Sebastien
                    </p>
                    <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                      Developpeur
                    </p>
                    <p className="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                      Patrick Sébastien, born November 14, 1953 in
                      Brive-la-Gaillarde, is an imitator.
                    </p>
                  </div>
                  <div className="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-between">
                    <a href="#">
                      <svg
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                      </svg>
                    </a>

                    <a href="#">
                      <svg
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4 relative">
                <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
                  <a href="#" className="block relative">
                    <img
                      alt="profil"
                      src="https://firebasestorage.googleapis.com/v0/b/web-dev-demo-adarsh.appspot.com/o/pexels-sheep-1846422.jpg?alt=media&token=998a0c9a-5562-47de-8dac-f726d973bfb7"
                      className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800 mask mask-decagon"
                    />
                  </a>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24">
                  <div className="text-center">
                    <p className="text-2xl text-gray-800 dark:text-white">
                      Charlie
                    </p>
                    <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                      Lead dev
                    </p>
                    <p className="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                      Charlie, born December 18, 1993 in Challans, is an
                      imitator and pintor.
                    </p>
                  </div>
                  <div className="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-between">
                    <a href="#">
                      <svg
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                      </svg>
                    </a>

                    <a href="#">
                      <svg
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 relative">
                <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
                  <a href="#" className="block relative">
                    <img
                      alt="profil"
                      src="https://firebasestorage.googleapis.com/v0/b/web-dev-demo-adarsh.appspot.com/o/pexels-sheep-1846422.jpg?alt=media&token=998a0c9a-5562-47de-8dac-f726d973bfb7"
                      className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"
                    />
                  </a>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24">
                  <div className="text-center">
                    <p className="text-2xl text-gray-800 dark:text-white">
                      Thierry Halliday
                    </p>
                    <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                      CTO
                    </p>
                    <p className="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                      Thierry Halliday, born November 4, 1993 in Saint hilaire
                      de riez, is css specialist.
                    </p>
                  </div>
                  <div className="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-between">
                    <a href="#">
                      <svg
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                      </svg>
                    </a>

                    <a href="#">
                      <svg
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z"></path>
                      </svg>
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
