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

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
// End Edit

function TaskDetails({ close, setClose }) {
  // Edits Below
  const _ref = useRef(null);
  useEffect(() => {
    if (!_ref.current) return;
    _ref.current.scrollIntoView({ behavior: "smooth" });
  });
  let query = useQuery();
  let task_id = Number(query.get("task_id"));
  let this_task = projectData()[task_id];
  let [upload_file, set_upload_file] = useState("");
  // End Edits
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
        <section className="tw-hero">
          <div className="tw-container md:tw-mt-5">
            <div className="tw-flex tw-flex-col tw-text-center tw-w-full tw-mb-12">
              <div className="tw-card tw-bg-gray-300 tw-rounded-t-none md:tw-rounded-t-3xl tw-max-w-7xl tw-self-center">
                <div ref={_ref}></div>
                <figure className="tw-px-10 tw-pt-10 tw-max-w-2xl tw-self-center">
                  <img
                    src={this_task.img}
                    alt="is-this-gud?"
                    className="tw-rounded-xl tw-max-w-2xl"
                  />
                </figure>
                <div className="tw-card-body">
                  <h2 className="tw-card-title tw-text-3xl">
                    {this_task.title}
                  </h2>
                  <p className="tw-text-sm tw-text-gray-400">
                    {this_task.subtitle}
                  </p>
                  <div className="lg:tw-w-1/2 md:tw-w-2/3 tw-mx-auto tw-pt-6">
                    <div className="tw-flex tw-flex-wrap tw--mx-3 tw-mb-6">
                      <div className="tw-w-full tw-text-justify tw-mx-auto tw-py-2 tw-px-2 tw-text-normal">
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </span>
                      </div>
                    </div>
                    <div className="tw-justify-center tw-card-actions tw-pt-4">
                      <span
                        className={`tw-badge ${
                          this_task.status
                            ? "tw-badge-success"
                            : "tw-badge-error"
                        }`}
                      >
                        {this_task.status ? "Completed" : "Incomplete"}
                      </span>
                      <span
                        className={`tw-badge ${
                          this_task.late
                            ? "tw-badge-warning"
                            : "tw-badge-success"
                        }`}
                      >
                        {this_task.late ? "Late" : "On-Time"}
                      </span>
                    </div>
                    <div className="tw-justify-center tw-card-actions tw-pt-2">
                      <label
                        className={`tw-btn tw-btn-wide ${
                          upload_file ? "tw-btn-info" : ""
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
                          className="tw-hidden tw-loading"
                        />
                      </label>
                      <button
                        onClick={(e) => {
                          console.log(e);
                          e.target.classList += "tw-btn-success ";
                          // add tw-btn-success or tw-btn-error depending on ok or not
                        }}
                        className={`tw-btn tw-btn-info ${
                          upload_file ? "" : "tw-hidden"
                        }`}
                      >
                        Upload
                      </button>
                    </div>
                  </div>
                  <div className="tw-justify-center tw-text-sm pt-6">
                    <span className="tw-text-xs tw-text-gray-600">
                      Task ID: {this_task.id}
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
