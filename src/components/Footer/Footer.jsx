import React from "react";
import "./Footer.css";
import logo from "./../../assets/media/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="social-links">
          <ul className="socials">
            <li>
              <button className="btn">
                <i className="fa-brands fa-facebook-f"></i>
              </button>
            </li>
            <li>
              <button className="btn">
                <i className="fa-brands fa-twitter"></i>
              </button>
            </li>
            <li>
              <button className="btn">
                <i className="fa-brands fa-instagram"></i>
              </button>
            </li>
            <li>
              <button className="btn">
                <i className="fa-brands fa-youtube"></i>
              </button>
            </li>
          </ul>

          <form action="">
            <input placeholder="Email" type="text" />
            <button className="subscribe">
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </form>
        </div>
      </div>

      <div className="footer-copyright">
        @ 2024, Made with ❤️ by <b>Deepak</b> & <b>Creative Tweaks</b> for a
        better web
      </div>
    </footer>
  );
};

export default Footer;
