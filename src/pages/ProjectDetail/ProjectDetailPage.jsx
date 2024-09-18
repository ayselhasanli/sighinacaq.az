import React from "react";
import "./ProjectDetailPage.css";
import project_1 from "../../assets/media/project-page-1.png";
import project_2 from "../../assets/media/project-page-2.png";
import project_3 from "../../assets/media/project-page-3.png";
import icon from "../../assets/media/page-nav-icon.png"

const ProjectDetailPage = () => {
  const projects = [
    {
      id: 1,
      name: "Crook Church Hope Bank",
      date: "September 15, 2021",
      client: "Industrial Company",
      location: "New York, USA",
      category: "Home Protection",
      detail:
        "We were contracted to advise and improve the lighting in the main hall. The lighting that they were using was 500W halogen flood lights which meant they had very high energy bills and unnecessary maintenance issues. Our lighting design team used an LED high power flood light with an energy saving of 450w per fitting, so not only a massive saving but a manufacturer's warranty of 5 years. The church are very happy as the savings they have made have allowed them to invest in other areas.",
      img: project_1,
    },
    {
      id: 2,
      name: "LED Lighting Project",
      date: "October 22, 2012",
      client: "Industrial Company",
      location: "New York, USA",
      category: "Home Protection",
      detail:
        "The customer had high frequency fluorescent 4 tube light fittings that were each using 72 watts of power with a quantity in excess of 120 on one office floor. We halved the number of fittings and halved the power per fitting giving a 75% reduction in energy bills which reduced maintenance and lifetime replacement costs. LEDs give a crisp, clean light and don't have the glare of a fluorescent light so we also created better working conditions in the office.",
      img: project_2,
    },
    {
      id: 3,
      name: "Port of Call, Sunderland",
      date: "July 12, 2020",
      client: "Industrial Company",
      location: "New York, USA",
      category: "Home Protection",
      detail:
        "The installation was for a new customer where all duct work and fittings were on show. The pipe runs were installed neatly, ensuring that they did not detract from the look of the building. Gravity drains were used to replace the old pump system. Following the success of this installation we were appointed as main electrical contractor for the company.",
      img: project_3,
    },
  ];
  return (
    <section className="project-detail-page">
      <div className="container">
        <div className="project-infos">
          <div className="project-img">
            <img src={project_1} alt="" />
          </div>
          <div className="project-info">
            <ul>
              <li className="info-heading">Date:</li>
              <li>September 15, 2021</li>
            </ul>
            <ul>
              <li className="info-heading">Client:</li>
              <li>Industrial Company</li>
            </ul>
            <ul>
              <li className="info-heading">Location:</li>
              <li>USA, New York</li>
            </ul>
            <ul>
              <li className="info-heading">Category:</li>
              <li>Home Protection</li>
            </ul>
          </div>
        </div>
        <div className="project-details">
          <h2>Project Detail</h2>
          <p>
            We were contracted to advise and improve the lighting in the main
            hall.
          </p>
          <p>
            The lighting that they were using was 500W halogen flood lights
            which meant they had very high energy bills and unnecessary
            maintenance issues.
          </p>
          <p>
            Our lighting design team used an LED high power flood light with an
            energy saving of 450w per fitting, so not only a massive saving but
            a manufacturer's warranty of 5 years.
          </p>
          <p>
            The church are very happy as the savings they have made have allowed
            them to invest in other areas.
          </p>
        </div>
        <div className="page-navigation">
          <div className="prev-project">
            <button className="prev-btn">
              <i className="fa-solid fa-chevron-left"></i> Previous
            </button>
            <p>SG Petch - Mazda LED...</p>
          </div>
          <div className="nav-icon">
            <img src={icon} alt="" />
          </div>
          <div className="next-project">
            <button className="next-btn">
              Next <i className="fa-solid fa-chevron-right"></i>
            </button>
            <p>LED Lighting Project</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailPage;
