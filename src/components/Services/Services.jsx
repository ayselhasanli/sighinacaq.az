import React from 'react'
import "./Services.css";
import project_1 from "./../../assets/media/project-1.jpg";
import project_2 from "./../../assets/media/project-2.jpg";
import project_3 from "./../../assets/media/project-3.jpg";
import ProjectCard from "../ProjectCard/ProjectCard";

const Services = () => {
const services = [
  {
    id: 1,
    title: "Electrical and Mechanical",
    img: project_1,
  },
  {
    id: 2,
    title: "Air Conditioning and Ventilation",
    img: project_2,
  },
  {
    id: 3,
    title: "Refrigeration",
    img: project_3,
  },
];
return (
  <section className="services" id="services">
    <div className="section-heading">
      <h2>Services</h2>
    </div>
    <div className="container">
      <div className="service-cards">
        {services.map((service) => {
          return (
            <ProjectCard
              key={service.id}
              title={service.title}
              img={service.img}
            />
          );
        })}
      </div>
    </div>
  </section>
);
}

export default Services
