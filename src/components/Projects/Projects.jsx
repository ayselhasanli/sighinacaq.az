import React from "react";
import "./Projects.css";
import project_1 from "./../../assets/media/project-1.jpg";
import project_2 from "./../../assets/media/project-2.jpg";
import project_3 from "./../../assets/media/project-3.jpg";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  const projects = [
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
    <section className="projects" id="projects">
      <div className="section-heading">
        <h2>Projects</h2>
      </div>
      <div className="container">
        <div className="project-cards">
          {
            projects.map((project) => {
              return (
                <ProjectCard key={project.id} title={project.title} img={project.img}/>
              )
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Projects;
