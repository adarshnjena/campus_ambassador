import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  pageAnimation,
  titleAnim,
  slider,
  sliderContainer,
  showAnim,
} from "../logic/animations";
import styled from "styled-components";
import "../style/taskDetails.scss";
import projectData from "../utils/taskData";

// Edits Below
import { useLocation } from "react-router-dom";

import { auth, update_task_data } from "../logic/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
// End Edit

function TaskDetails({ close, setClose, setNavbarVisible }) {
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

  const _ref = useRef(null);
  useEffect(() => {
    if (!_ref.current) return;
    _ref.current.scrollIntoView({ behavior: "smooth" });
  });
  let query = useQuery();
  let task_id = Number(query.get("task_id"));
  let this_task = projectData()[task_id];
  let [upload_file, set_upload_file] = useState("");

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
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
        className="app-navbar "
      >
        <i
          onClick={() => {
            setClose(!close);
          }}
          className="bx bx-menu"
        ></i>
        <span className="text">Task {task_id + 1}</span>
      </motion.div>
      <motion.div variants={showAnim}>
        <section className="hero">
          <div className="container md:mt-5">
            <div className="flex flex-col w-full mb-12 text-center">
              <div className="self-center bg-gray-300 rounded-t-none card md:rounded-t-3xl max-w-7xl">
                <div ref={_ref}></div>
                <figure className="self-center max-w-xl px-10 pt-10">
                  <img
                    src={this_task.img}
                    alt="is-this-gud?"
                    className="max-w-2xl rounded-xl"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-3xl card-title">{this_task.title}</h2>
                  <p className="text-sm text-gray-400">{this_task.subtitle}</p>
                  <div className="pt-6 mx-auto lg:w-1/2 md:w-2/3">
                    <div className="flex flex-wrap mb-6 -mx-3">
                      <div className="w-full px-2 py-2 mx-auto text-justify text-normal">
                        <span>{this_task.content}</span>
                      </div>
                    </div>
                    <div className="justify-center pt-4 card-actions">
                      <span
                        className={`badge ${
                          this_task.status ? "badge-success" : "badge-error"
                        }`}
                      >
                        {this_task.status ? "Completed" : "Incomplete"}
                      </span>
                    </div>
                    <div className="justify-center pt-2 card-actions">
                      <label
                        className={`p-4 uppercase rounded-xl ${
                          upload_file
                            ? "btn-info"
                            : "bg-gray-600 text-white uppercase"
                        }`}
                      >
                        {upload_file
                          ? upload_file.split("\\").pop().split("/").pop()
                          : "Select a File"}
                        <input
                          onChange={(e) => {
                            set_upload_file(e.target.value);
                          }}
                          type="file"
                          id="src"
                          name="src"
                          required
                          className="hidden loading"
                        />
                      </label>
                      <button
                        onClick={async (e) => {
                          console.log(e);
                          e.target.classList += "btn-warning";
                          e.target.innerHTML = "Uploading...";
                          await sleep(5000 * Math.random());
                          update_task_data(auth.currentUser, task_id + 1);
                          e.target.classList.remove("btn-warning");
                          e.target.classList.add("btn-success");
                          e.target.innerHTML = "Uploaded";
                          await sleep(2000);
                          redirect();
                        }}
                        className={`p-4 rounded-lg uppercase  btn-info ${
                          upload_file ? "" : "hidden"
                        }`}
                      >
                        Upload
                      </button>
                    </div>
                  </div>
                  <div className="justify-center pt-6 text-sm">
                    <span className="text-xs text-gray-600">
                      If you need to upload multiple files, please create a .zip
                      file. We will check the file regardless.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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

export default TaskDetails;
