import { useState } from 'react';
import Home from './pages/home';
import './style/app.scss';
import Nav from './components/navbar';
import { Routes, Route } from 'react-router-dom';
import Category from './pages/catogary';



function App() {
  const [close, setClose] = useState(true);
  return (
    <div>
      <Nav close={close} setClose={setClose} />
      <Routes>
        <Route path="/" element={<Home close={close} setClose={setClose} />} />
        <Route path="/category" element={<Category close={close} setClose={setClose} />} />
        <Route path="/analytics" element={<Home close={close} setClose={setClose} />} />
        <Route path="/team" element={<Home close={close} setClose={setClose} />} />
        <Route path="/calendar" element={<Home close={close} setClose={setClose} />} />
      </Routes>
    </div>
  );
}

export default App;
