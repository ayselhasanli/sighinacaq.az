import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "./../../assets/media/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [mobMenu, setMobMenu] = useState(true);
  const [navMenu, setNavMenu] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [links, setLinks] = useState([]);

  const handleSearchClick = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    setInputValue(e.target.value);
    console.log(value);
  };

  useEffect(() => {
    fetch("http://localhost:3000/navbar")
      .then((response) => response.json())
      .then((data) => setNavMenu(data));

    fetch("http://localhost:3000/socialLinks")
      .then((response) => response.json())
      .then((data) => setLinks(data));
  }, []);

  const toggleMenu = () => {
    mobMenu ? setMobMenu(false) : setMobMenu(true);
  };

  return (
    <header className="sticky">
      <nav className="container">
        <NavLink to="/">
          <div className="logo">
            <img src={logo} alt="header-logo" />
          </div>
        </NavLink>
        <ul className={`nav-menu ${mobMenu ? "" : "show-mob-menu"}`}>
          {navMenu.map((menuItem) => {
            return (
              <li key={menuItem.id}>
                <NavLink offset={0} to={menuItem.link}>
                  {menuItem.title}
                </NavLink>
              </li>
            );
          })}
          <li className="header-socials">
            {links.map((link) => {
              return (
                <NavLink key={link.id} to={link.to}>
                  <button className=" ">
                    <i className={`${link.icon}`}></i>
                  </button>
                </NavLink>
              );
            })}
          </li>
        </ul>

        <div className={`search-container ${isExpanded ? "expanded" : ""}`}>
          <input
            type="text"
            className="search-input"
            placeholder="search"
            style={{
              width: isExpanded ? "20rem" : "0",
              opacity: isExpanded ? 1 : 0,
            }}
          />
          <button className="search-button btn" onClick={handleSearchClick}>
            <i className={`fa fa-search ${isExpanded ? "rotate" : ""}`}></i>
          </button>
        </div>
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
