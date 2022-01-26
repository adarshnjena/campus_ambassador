import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimation } from "../logic/animations";

function Nav({ close, setClose }) {
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
              to="/"
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
              to="/analytics"
            >
              <i className="bx bx-analyse"></i>
              <span className="link_name">analytics</span>
            </NavLink>
            <ul className="sub-menu blank">
              <li>
                <Link to="#" className="link_name">
                  analytics
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
              to="/team"
            >
              <i className="bx bx-calendar"></i>
              <span className="link_name">Calendar</span>
            </NavLink>
            <ul className="sub-menu blank">
              <li>
                <Link to="#" className="link_name">
                  Calendar
                </Link>
              </li>
            </ul>
          </li>
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
        </ul>
      </div>
    </motion.div>
  );
}

export default Nav;
