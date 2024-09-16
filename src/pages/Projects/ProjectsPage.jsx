import React from 'react'
import PageHeading from '../../components/PageHeading/PageHeading';
import section_img from "../../assets/media/services-page.jpg";
import project_1 from "./../../assets/media/project-1.jpg";
import project_2 from "./../../assets/media/project-2.jpg";
import project_3 from "./../../assets/media/project-3.jpg";
import project_4 from "./../../assets/media/project-4.jpg";
import project_5 from "./../../assets/media/project-5.jpg";
import project_6 from "./../../assets/media/project-6.jpg";
import "./ProjectsPage.css"

const ProjectsPage = () => {
    const projects = [
      {
        id: 1,
        name: "Crook Church Hope Bank",
        img: project_1,
      },
      {
        id: 2,
        name: "LED Lighting Project",
        img: project_2,
      },
      {
        id: 3,
        name: "Lab and Mezzanine...",
        img: project_3,
      },
      {
        id: 4,
        name: "Parker Hannifin...",
        img: project_4,
      },
      {
        id: 5,
        name: "Port of Call, Sunderland",
        img: project_5,
      },
      {
        id: 6,
        name: "SG Petch - Mazda LED...",
        img: project_6,
      },
    ];
  return (
    <>
      <PageHeading img={section_img} title={"Projects"} />

      <section className="project-page-cards">
        <div className="container">
          {projects.map((project) => {
            return (
              <div className="project-page-card">
                <div className="card-img">
                  <img src={project.img} alt="" />
                  <div className="img-overlay"></div>
                </div>
                <button>
                  {project.name} <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default ProjectsPage
