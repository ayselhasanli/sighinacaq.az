import React, { useState, useEffect } from "react";
import "./Footer.css";
import { NavLink, useLocation } from "react-router-dom";

const Footer = () => {
  const [navMenu, setNavMenu] = useState([]);
  const [services, setServices] = useState([]);
  const [contactInfo, setContactInfo] = useState([]);
  const [links, setLinks] = useState([])

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  useEffect(() => {
    fetch("http://localhost:3000/navbar")
      .then((response) => response.json())
      .then((data) => setNavMenu(data));

    fetch("http://localhost:3000/services")
      .then((response) => response.json())
      .then((data) => setServices(data));

    fetch("http://localhost:3000/contactInfos")
      .then((response) => response.json())
      .then((data) => setContactInfo(data));

      fetch("http://localhost:3000/socialLinks")
        .then((response) => response.json())
        .then((data) => setLinks(data));
  }, []); 

  return (
    <footer>
      <div className="container">
        <ul className="footer-menu">
          <li className="ul-heading">EMS Contracting</li>
          {navMenu.map((menuItem) => {
            return (
              <li className="menu-item" key={menuItem.id}>
                <NavLink onClick={ScrollToTop} to={menuItem.link}>
                  {menuItem.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <ul className="footer-menu footer-services">
          <li className="ul-heading">Services</li>
          {services.map((service) => {
            return (
              <li className="menu-item" key={service.id}>
                <NavLink onClick={ScrollToTop} to={`/services/${service.id}`}>
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
            {
              links.map((link) => {
                return (
                  <li key={link.id}>
                    <NavLink to={link.to}>
                      <button className="btn">
                        <i className={`${link.icon}`}></i>
                      </button>
                    </NavLink>
                  </li>
                );
              })
            } 
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
