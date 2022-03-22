import "./Navbar.css";
import logo from "../../media/logo-1.png";

const Navbar = () => {
  return (
       <nav className="container">
         <img id="logo" src={logo} alt=""></img>
         <ul className="nav_links">
           <li><a href="#">Home</a></li>
           <li><a href="#">Profile</a></li>
           <button className="button-main">Logout</button>
         </ul>
       </nav>
  );
};

export default Navbar;
