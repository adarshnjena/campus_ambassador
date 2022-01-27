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
        <section className="hero">
          <div className="container md:mt-5">
            <div className="flex flex-col text-center w-full mb-12">
              <div className="card bg-gray-300 rounded-t-none md:rounded-t-3xl">
                <figure className="px-10 pt-10">
                  <img
                    src={this_task.img}
                    alt="is-this-gud?"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-3xl">{this_task.title}</h2>
                  <p className="text-sm text-gray-400">{this_task.subtitle}</p>
                  <div className="lg:w-1/2 md:w-2/3 mx-auto pt-6">
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full text-justify mx-auto py-2 px-2 text-normal">
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                      </div>
                    </div>
                    <div className="justify-center card-actions pt-4">
                      <span className={`badge ${this_task.status ? 'badge-success':'badge-error'}`}>{this_task.status ? 'Completed':'Incomplete'}</span>
                      <span className={`badge ${this_task.late ? 'badge-warning':'badge-success'}`}>{this_task.late ? 'Late':'On-Time'}</span>
                    </div>
                    <div className="justify-center card-actions pt-2">
                    <label
                    className={`btn btn-wide ${upload_file ? 'disabled cursor-not-allowed':''}`}>
                    {upload_file ? upload_file.split('\\').pop().split('/').pop() : 'Select a File'}
                    <input onChange={
                      (e) => {
                        console.log(e.target);
                        set_upload_file(e.target.value);
                        console.log(upload_file);
                      }
                    } type="file" id="src" name="src" required className="hidden" />
							      </label>
                    <button onClick={(e) => {console.log(e)}} className={`btn btn-primary ${upload_file ? '':'hidden'}`}>Upload</button>
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
