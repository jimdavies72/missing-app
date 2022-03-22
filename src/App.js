import "./index.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from './pages/login/Login.js';
import Navbar from './components/navbar/Navbar.js';
import Home from './pages/login/Login.js';
import CreateMissing from './pages/createMissing/CreateMissing.js';
import Footer from './components/footer/Footer.js';

import { Test } from "./components/test/Test";

const App = () => {
  const [user, setUser] = useState();

  const clearUserHandler = () => {
    setUser(null);
    localStorage.removeItem(process.env.REACT_APP_LSTOKEN);
  };

  return (
    <div className="app-container">
      <header>
        <Navbar user={user} />
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Login user={user} setUser={setUser} />} />
          <Route path="/home" element={<Home setUser={setUser} />} />
          <Route path="/create-missing-person" element={<CreateMissing />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
};

export default App;
