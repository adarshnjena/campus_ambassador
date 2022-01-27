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
  let query = useQuery();
  let task_id = Number(query.get("task_id"));
  let this_task = projectData()[task_id];
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
        className="app-navbar"
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
          <div className="container px-5 py-24 mx-auto rounded-t-3xl">
            <div className="flex flex-col text-center w-full mb-12">
              <div className="card card-bordered bg-gray-300">
                <figure>
                  <img
                    src="https://picsum.photos/id/773/1000/200?blur=true"
                    alt="is-this-gud?"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-3xl">{this_task.title}</h2>
                  <p className="text-sm text-gray-400">{this_task.subtitle}</p>
                  <div className="lg:w-1/2 md:w-2/3 mx-auto pt-6">
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full mx-auto py-2 px-2 text-normal border-b-2 border-gray-600">
                        <span>WTF IS A CONTENT ?</span>
                      </div>
                    </div>
                    <div className="justify-center card-actions pt-4">
                      <span className={`badge ${this_task.status ? 'badge-success':'badge-error'}`}>{this_task.status ? 'Completed':'Incomplete'}</span>
                      <span className={`badge ${this_task.late ? 'badge-warning':'badge-success'}`}>{this_task.late ? 'Late':'On Time'}</span>
                    </div>
                  </div>
                  <div className="justify-center text-sm pt-6">
                    <span className="text-xs text-gray-600">Task ID: {this_task.id}</span>
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
  top: 60px;
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
