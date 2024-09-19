import React, {useState, useEffect} from 'react'
import { NavLink, useParams } from "react-router-dom";
import PageHeading from '../../components/PageHeading/PageHeading';
import section_img from "../../assets/media/services-page.jpg"; 
import "./ProjectsPage.css";


const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []); 

  return (
    <>
      <PageHeading img={section_img} title={"Projects"} />

      <section className="project-page-cards">
        <div className="container">
          {projects.map((project) => {
            return (
              <NavLink to={`/projects/${project.id}`}>
                <div className="project-page-card">
                  <div className="card-img">
                    <img src={project.img} alt="" />
                    <div className="img-overlay"></div>
                  </div>
                  <button>
                    {project.name} <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default ProjectsPage
