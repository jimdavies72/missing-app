import "./index.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login.js";
import Navbar from "./components/navbar/Navbar.js";
import Home from "./pages/home/Home.js";
import CreateMissing from "./pages/createMissing/CreateMissing.js";
import Footer from "./components/footer/Footer.js";
import Profile from "./pages/profile/Profile.js";

const App = () => {
  const [user, setUser] = useState();
  const [isCreate, setIsCreate] = useState(true);
  const [missingPerson, setMissingPerson] = useState();

  const clearUserHandler = () => {
    setUser(null);
    localStorage.removeItem("myToken");
  };

  const updatePersonHandler = (person, isCreate) => {
    if (!isCreate) {
      setIsCreate(false);
      setMissingPerson(person);
    }
  };

  const createPersonHandler = () => {
    setIsCreate(true);
    setMissingPerson(null);
  };

  return (
    <div className="app-container">
      <header>
        <Navbar user={user} clearUserHandler={clearUserHandler} />
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Login user={user} setUser={setUser} />} />
          <Route
            path="/home"
            element={
              <Home
                setUser={setUser}
                user={user}
                updatePersonHandler={updatePersonHandler}
                createPersonHandler={createPersonHandler}
              />
            }
          />
          <Route
            path="/register"
            element={
              <CreateMissing
                user={user}
                isCreate={isCreate}
                setMissingPerson={setMissingPerson}
                missingPerson={missingPerson}
                updatePersonHandler={updatePersonHandler}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                user={user}
                setUser={setUser}
                clearUserHandler={clearUserHandler}
              />
            }
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
