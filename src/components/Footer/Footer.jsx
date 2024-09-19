import React, { useState, useEffect } from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [navMenu, setNavMenu] = useState([]);
  const [services, setServices] = useState([]);
  const [contactInfo, setContactInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/navbar")
      .then((response) => response.json())
      .then((data) => setNavMenu(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/contactInfos")
      .then((response) => response.json())
      .then((data) => setContactInfo(data));
  }, []);

  return (
    <footer>
      <div className="container">
        <ul className="footer-menu">
          <li className="ul-heading">EMS Contracting</li>
          {navMenu.map((menuItem) => {
            return (
              <li className="menu-item" key={menuItem.id}>
                <NavLink to={menuItem.link}>{menuItem.title}</NavLink>
              </li>
            );
          })}
        </ul>
        <ul className="footer-menu footer-services">
          <li className="ul-heading">Services</li>
          {services.map((service) => {
            return (
              <li className="menu-item" key={service.id}>
                <NavLink to={`/services/${service.id}`}>
                  {service.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
        {contactInfo.map((info) => {
          return (
            <ul className="footer-menu" key={info.id}>
              <li className="ul-heading">Contact Us</li>
              <li className="menu-item">{info.address}</li>
              <li className="menu-item">{info.phoneNumber}</li>
              <li className="menu-item">{info.mail}</li>
            </ul>
          );
        })}
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
