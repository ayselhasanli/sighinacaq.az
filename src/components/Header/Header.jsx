import React, { useState } from "react";
import "./Header.css";
import logo from "./../../assets/media/logo.png";
import searchIcon from "./../../assets/media/navbar-search.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobMenu, setMobMenu] = useState(true);

  const toggleMenu = () => {
    mobMenu ? setMobMenu(false) : setMobMenu(true);

    console.log(mobMenu);
  };

  return (
    <header>
      <nav className="container">
        <div className="logo">
          <img src={logo} alt="header-logo" />
        </div>

        <ul className={`nav-menu ${mobMenu ? "" : "show-mob-menu"}`}>
          <li>
            <Link smooth={true} offset={0} to="services">
              Our Services
            </Link>
          </li>
          <li>
            <Link smooth={true} offset={0} to="training">
              Training
            </Link>
          </li>
          <li>
            <Link smooth={true} offset={0} to="projects">
              Projects
            </Link>
          </li>
          <li>
            <Link smooth={true} offset={0} to="contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link smooth={true} offset={0} to="services">
              About Us
            </Link>
          </li>
          <li>
            <ul className="header-socials">
              <li>
                <button>
                  <i className="fa-brands fa-facebook-f"></i>
                </button>
              </li>
              <li>
                <button>
                  <i className="fa-brands fa-twitter"></i>
                </button>
              </li>
              <li>
                <button>
                  <i className="fa-brands fa-instagram"></i>
                </button>
              </li>
              <li>
                <button>
                  <i className="fa-brands fa-youtube"></i>
                </button>
              </li>
            </ul>
          </li>
          <li>
            <button className="btn">
              <i className="fa-solid fa-magnifying-glass"></i>
              Search
            </button>
          </li>
        </ul>

        <button className="btn">
          <img src={searchIcon} alt="" />
          Search
        </button>

        <button
          onClick={toggleMenu}
          className={`mob-menu-btn ${mobMenu ? "" : "mob-menu-icon__white"}`}
        >
          <i className="fa-solid fa-bars-staggered"></i>
        </button>
      </nav>

      <nav className="tab-menu">
        <ul className="container">
          <li>
            <Link>Our Services</Link>
          </li>
          <li>
            <Link>Training</Link>
          </li>
          <li>
            <Link>Projects</Link>
          </li>
          <li>
            <Link>Contact Us</Link>
          </li>
          <li>
            <Link>About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
