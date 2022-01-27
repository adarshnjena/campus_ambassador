import React from 'react';
import { useState } from "react";
import Home from "./pages/home";
import "./style/app.scss";
import Nav from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Tasks from "./pages/tasks";
import TaskDetails from "./pages/tasksDetails";
import Login from "./pages/login";

function App() {
  const [close, setClose] = useState(true);
  const [navbarVisible, setNavbarVisible] = useState(false);
  return (
    <div>
      {navbarVisible ? (
        <Nav
          close={close}
          setClose={setClose}
          navbarVisible={navbarVisible}
          setNavbarVisible={setNavbarVisible}
        />
      ) : (
        <></>
      )}
      <Routes>
        <Route
          path="/home"
          element={<Home close={close} setClose={setClose} />}
        />
        <Route
          path="/tasks"
          element={<Tasks close={close} setClose={setClose} />}
        />
        <Route
          path="/analytics"
          element={<Home close={close} setClose={setClose} />}
        />
        <Route
          path="/team"
          element={<Home close={close} setClose={setClose} />}
        />
        <Route
          path="/calendar"
          element={<Home close={close} setClose={setClose} />}
        />
        <Route
          path="/taskdetails"
          element={<TaskDetails close={close} setClose={setClose} />}
        />
        <Route
          path="/"
          element={
            <Login
              navbarVisible={navbarVisible}
              setNavbarVisible={setNavbarVisible}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
