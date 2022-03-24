import "./index.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login.js";
import Navbar from "./components/navbar/Navbar.js";
import Home from "./pages/home/Home.js";
import CreateMissing from "./pages/createMissing/CreateMissing.js";
import Footer from "./components/footer/Footer.js";

const App = () => {
  const [user, setUser] = useState();
  const [isCreate, setIsCreate] = useState(true);
  const [missingPerson, setMissingPerson] = useState();

  const clearUserHandler = () => {
    setUser(null);
    localStorage.removeItem("myToken");
  };

  return (
    <div className="app-container">
      <header>
        <Navbar user={user} />
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Login user={user} setUser={setUser} />} />
          <Route
            path="/home"
            element={<Home setUser={setUser} user={user} />}
          />
          <Route
            path="/register"
            element={<CreateMissing user={user} isCreate={isCreate} setMissingPerson={setMissingPerson} missingPerson={missingPerson} />}
          />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
