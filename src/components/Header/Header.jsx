import React, { useState } from "react";
import "./Header.css";
import logo from "./../../assets/media/logo.png";
import searchIcon from "./../../assets/media/navbar-search.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [mobMenu, setMobMenu] = useState(true);
  // const [active, setActive] = useState(false)

  const toggleMenu = () => {
    mobMenu ? setMobMenu(false) : setMobMenu(true);
  };

  return (
    <header className="sticky">
      <nav className="container">
        <div className="logo">
          <NavLink smooth={true} to="/">
            <img src={logo} alt="header-logo" />
          </NavLink>
        </div>

        <ul className={`nav-menu ${mobMenu ? "" : "show-mob-menu"}`}>
          <li>
            <NavLink
              smooth={true}
              offset={0}
              to="#services"
            >
              Our Services
            </NavLink>
          </li>
          <li>
            <NavLink smooth={true} offset={0} to="#training">
              Training
            </NavLink>
          </li>
          <li>
            <NavLink smooth={true} offset={0} to="#projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink smooth={true} offset={0} to="#contact">
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink smooth={true} offset={0} to="#services">
              About Us
            </NavLink>
          </li>
          <li className="header-socials">
            <button>
              <i className="fa-brands fa-facebook-f"></i>
            </button>
            <button>
              <i className="fa-brands fa-twitter"></i>
            </button>
            <button>
              <i className="fa-brands fa-instagram"></i>
            </button>
            <button>
              <i className="fa-brands fa-youtube"></i>
            </button>
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
