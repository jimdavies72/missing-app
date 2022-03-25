import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../media/logo-1.png";

const Navbar = ({ user, clearUserHandler }) => {
  return (
    <nav className="container">
      <img id="logo" src={logo} alt=""></img>
      <ul className="nav_links">
        {user && (
          <li>
            <Link to="/home">Home</Link>
          </li>
        )}
        {user && (
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        )}
        {user && (
          <li>
            <p>Logged In: {user}</p>
          </li>
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
