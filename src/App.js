import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Test } from "./components/test/Test";

const App = () => {
  const [user, setUser] = useState();

  const clearUserHandler = () => {
    setUser(null);
    localStorage.removeItem(process.env.REACT_APP_LSTOKEN);
  };

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Test />} />
      </Routes>
    </div>
  );
};

export default App;
