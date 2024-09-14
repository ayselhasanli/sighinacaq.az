import React from 'react'
import "./ServicesPage.css"
import PageHeading from '../../components/PageHeading/PageHeading';
import section_img from "../../assets/media/services-page.jpg"
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import project_1 from "./../../assets/media/project-1.jpg";
import project_2 from "./../../assets/media/project-2.jpg";
import project_3 from "./../../assets/media/project-3.jpg";
import project_4 from "./../../assets/media/project-4.jpg";
import project_5 from "./../../assets/media/project-5.jpg";
import project_6 from "./../../assets/media/project-6.jpg";
import project_7 from "./../../assets/media/project-7.jpg";
import { NavLink } from 'react-router-dom';

const ServicesPage = () => {
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
    {
      id: 4,
      title: "F Gas Regulation",
      img: project_4,
    },
    {
      id: 5,
      title: "Renewable Energy and Heating",
      img: project_5,
    },
    {
      id: 6,
      title: "Electricity and Gas Metering",
      img: project_6,
    },
    {
      id: 7,
      title: "Waste Recycling",
      img: project_7,
    },
  ];
  return (
    <>
      <PageHeading title={"Services"} img={section_img} />

      <section className="services-container">
        {services.map((service) => {
          return (
            <NavLink to="/servicedetail">
              <ProjectCard
                key={service.id}
                title={service.title}
                img={service.img}
              />
            </NavLink>
          );
        })}
      </section>
    </>
  );
}

export default ServicesPage
