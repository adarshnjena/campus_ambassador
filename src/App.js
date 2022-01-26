import { useState } from "react";
import Home from "./pages/home";
import "./style/app.scss";
import Nav from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Tasks from "./pages/tasks";
import TaskDetails from "./pages/tasksDetails";

function App() {
  const [close, setClose] = useState(true);
  return (
    <div>
      <Nav close={close} setClose={setClose} />
      <Routes>
        <Route path="/" element={<Home close={close} setClose={setClose} />} />
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
      </Routes>
    </div>
  );
}

export default App;
