import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../media/logo-1.png";
import { useState } from "react";

const Navbar = ({ user, clearUserHandler }) => {
  const [bool, setBool] = useState(false);

  return (
    <nav className="container">
      <img id="logo" src={logo} alt=""></img>
      <ul className="nav_links">
        {user && (
          <li>
            <p>Logged In: {user}</p>
          </li>
        )}
        {user && (
          <Link to="/home">
            <button className="button-main" onClick="">
              Home
            </button>
          </Link>
        )}
        {user && (
          <Link to="/profile">
            <button className="button-main" onClick="">
              Profile
            </button>
          </Link>
        )}
        {user && (
          <button className="button-main" onClick={() => clearUserHandler()}>
            Logout
          </button>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
