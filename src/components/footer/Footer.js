import React from "react";
import "./Footer.css";
import logo from "../../media/logo-1.png"; 

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="row">
        <div className="git">
          <h2>Creators</h2>
            <a href="https://github.com/CatTiac">Cait J</a>
            <a href="https://github.com/jimdavies72">James D</a>
            <a href="https://github.com/clarkenewsh">Clarke N</a>
            <a href="https://github.com/EethanF">Ethan F</a>
            <a href="https://github.com/ConnahShackley">Connah S</a>
        </div>
        <div className="aboutUs">
          <h2>About Us</h2>
          <p>As students at CodeNation we where tasked with building a web app. We decided, as a team, to create something
            that would help people with missing loved ones.</p>
        </div>
        <div className="footerLogo">
          <img id="footerLogoImg" src={logo} alt=""/>
          <p className="copyright">© 2022-2023 ICQ.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
