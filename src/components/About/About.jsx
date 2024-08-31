import React from "react";
import "./About.css";
import aboutImg from "./../../assets/media/about.png";
import service1 from "./../../assets/media/about-icon-1.png";
import service2 from "./../../assets/media/about-icon-2.png";
import service3 from "./../../assets/media/about-icon-3.png";
import service4 from "./../../assets/media/about-icon-4.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-img">
          <img src={aboutImg} alt="about-img" />
        </div>
        <div className="about-content">
          <h5>About us</h5>
          <h2>Welcome to EMS Contracting</h2>
          <p>
            EMS Contracting, founded in 2013 by Mick Donkin and Kris Armstrong
            then later joined by key director Daryl Shepherd, incorporates 3
            divisions - Metering, Renewables and Recycling.
          </p>
          <div className="about-services">
            <div>
              <img src={service1} alt="service-1" />
            </div>
            <div>
              <img src={service2} alt="service-2" />
            </div>
            <div>
              <img src={service3} alt="service-3" />
            </div>
            <div>
              <img src={service4} alt="service-4" />
            </div>
          </div>

          <button className="about-button">
            See More <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
