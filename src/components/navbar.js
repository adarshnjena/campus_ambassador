import React from "react"; // Fix for undefined
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimation } from "../logic/animations";

function Nav({ close, setClose, navbarVisible, setNavbarVisible }) {
  const navToggelHandler = () => {
    setClose(true);
  };

  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show">
      <div className={`sidebar ${close ? "close" : ""}`}>
        <div className="logo-details">
          <i
            onClick={() => {
              navToggelHandler();
            }}
            className="bx bx-arrow-back"
          ></i>
          <img className="logo_name" src="image/adhyaaya-logo.png"></img>
        </div>
        <ul className="nav-links">
          <li
            onClick={() => {
              navToggelHandler();
            }}
          >
            <NavLink
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "black" : "#11101d",
                };
              }}
              to="/home"
            >
              <i className="bx bx-home"></i>
              <span className="link_name">Home</span>
            </NavLink>
            <ul className="sub-menu blank">
              <li>
                <Link to="#" className="link_name">
                  Home
                </Link>
              </li>
            </ul>
          </li>
          <li
            onClick={() => {
              navToggelHandler();
            }}
          >
            <NavLink
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "black" : "#11101d",
                };
              }}
              to="/tasks"
            >
              <i className="bx bx-category"></i>
              <span className="link_name">Tasks</span>
            </NavLink>
            <ul className="sub-menu blank">
              <li>
                <Link to="" className="link_name">
                  tasks
                </Link>
              </li>
            </ul>
          </li>
          <li
            onClick={() => {
              navToggelHandler();
            }}
          >
            <NavLink
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "black" : "#11101d",
                };
              }}
              to="/faq"
            >
              <i class="bx bx-question-mark"></i>
              <span className="link_name">FAQ's</span>
            </NavLink>
            <ul className="sub-menu blank">
              <li>
                <Link to="#" className="link_name">
                  FAQ's
                </Link>
              </li>
            </ul>
          </li>
          <li
            onClick={() => {
              navToggelHandler();
            }}
          >
            <NavLink
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "black" : "#11101d",
                };
              }}
              to="/team"
            >
              <i className="bx bx-group"></i>
              <span className="link_name">Team</span>
            </NavLink>
            <ul className="sub-menu blank">
              <li>
                <Link to="#" className="link_name">
                  Team
                </Link>
              </li>
            </ul>
          </li>
          <li
            onClick={() => {
              navToggelHandler();
            }}
          >
            <NavLink
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "black" : "#11101d",
                };
              }}
              to="/scores"
            >
              <i class="bx bx-line-chart"></i>
              <span className="link_name">Scores</span>
            </NavLink>
            <ul className="sub-menu blank">
              <li>
                <Link to="#" className="link_name">
                  Scores
                </Link>
              </li>
            </ul>
          </li>
          <Link
            onClick={() => {
              setNavbarVisible(false);
            }}
            to={"/"}
          >
            <li>
              <div className="profile-details">
                <div className="profile-content">
                  <img src="image/profile.svg" />
                </div>
                <div className="name-job">
                  <div className="profile_name">User</div>
                  <div className="job">Campus Ambasidor</div>
                </div>
                <i className="bx bx-log-out"></i>
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </motion.div>
  );
}

export default Nav;
