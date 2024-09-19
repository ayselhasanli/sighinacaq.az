import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "./../../assets/media/logo.png";
import searchIcon from "./../../assets/media/navbar-search.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [mobMenu, setMobMenu] = useState(true);
  const [navMenu, setNavMenu] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/navbar")
      .then((response) => response.json())
      .then((data) => setNavMenu(data));
  }, []);

  const toggleMenu = () => {
    mobMenu ? setMobMenu(false) : setMobMenu(true);
  };

  return (
    <header className="sticky">
      <nav className="container">
        <NavLink smooth={true} to="/">
          <div className="logo">
            <img src={logo} alt="header-logo" />
          </div>
        </NavLink>
        <ul className={`nav-menu ${mobMenu ? "" : "show-mob-menu"}`}>
          {navMenu.map((menuItem) => {
            return (
              <li key={menuItem.id}>
                <NavLink smooth={true} offset={0} to={menuItem.link}>
                  {menuItem.title}
                </NavLink>
              </li>
            );
          })}
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
          {navMenu.map((menuItem) => {
            return (
              <li key={menuItem.id}>
                <NavLink smooth={true} offset={0} to={menuItem.link}>
                  {menuItem.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
