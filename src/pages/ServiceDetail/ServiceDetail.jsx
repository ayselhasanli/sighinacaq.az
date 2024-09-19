import React, { useState, useEffect } from "react";
import "./ServiceDetail.css"; 

const ServiceDetail = () => {
  const [activeSection, setActiveSection] = useState("electrical");
  const [showContent, setShowContent] = useState(true);
  const [services, setServices] = useState([]);
  const [details, setDetails] = useState([]);

  const handleSectionChange = (section) => {
    setShowContent(false);
    setTimeout(() => {
      setActiveSection(section);
      setShowContent(true);
    }, 300);
  };

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/serviceDetails")
      .then((response) => response.json())
      .then((data) => setDetails(data));
  }, []);

  return (
    <section className="service-detail" id="serviceDetail">
      <div className="container">
        <nav className="navbar">
          <ul>
            {services && services.map((service) => {
              return (
                <li
                  className={`${
                    activeSection === `${service.category}`
                      ? "active-section section-animation"
                      : ""
                  }`}
                  onClick={() => handleSectionChange(service.category)}
                >
                  {service.title}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="content">
          {services && services.map((service) => {
            {
              if (activeSection === service.category) {
                return (
                  <div
                    className={`content-section ${showContent ? "show" : ""}`}
                  >
                    <div>
                      <img src={service.img} alt="" />
                    </div>
                    <h2>{service.title}</h2>
                    <p>{service.desc}</p>
                  </div>
                );
              }
            }
          })}

          <div className="service-details">
            <ul>
              {details && details.map((detail) => {
                return (
                  <li key={detail.id}>
                    <img src={detail.icon} alt="" />
                    <p>{detail.title}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
