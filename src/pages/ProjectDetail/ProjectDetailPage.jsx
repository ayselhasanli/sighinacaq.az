import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import icon from "../../assets/media/page-nav-icon.png";
import "./ProjectDetailPage.css"; 

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  const currentProjectIndex = projects.findIndex(
    (project) => project.id === id
  );
  const currentProject = projects[currentProjectIndex];

  const goToNextProject = () => {
    const nextIndex = currentProjectIndex + 1;
    if (nextIndex < projects.length) {
      const nextProjectId = projects[nextIndex].id;
      navigate(`/projects/${nextProjectId}`);
    }
  };

   const goToPreviousProject = () => {
     const prevIndex = currentProjectIndex - 1;
     if (prevIndex >= 0) {
       const prevProjectId = projects[prevIndex].id;
       navigate(`/projects/${prevProjectId}`);
     }
   };

  return (
    <section className="project-detail-page">
      <div className="container">
        {projects.map((project) => {
          if (project.id === id) {
            return (
              <>
                <div className="project-infos">
                  <div className="project-img">
                    <img src={project.img} alt="" />
                  </div>
                  <div className="project-info">
                    <ul>
                      <li className="info-heading">Date:</li>
                      <li>{project.date}</li>
                    </ul>
                    <ul>
                      <li className="info-heading">Client:</li>
                      <li>{project.client}</li>
                    </ul>
                    <ul>
                      <li className="info-heading">Location:</li>
                      <li>{project.location}</li>
                    </ul>
                    <ul>
                      <li className="info-heading">Category:</li>
                      <li>{project.category}</li>
                    </ul>
                  </div>
                </div>
                <div className="project-details">
                  <h2>Project Detail</h2>
                  <p>{project.detail}</p>
                </div>
                <div className="page-navigation">
                  <div className="prev-project">
                    <button
                      onClick={goToPreviousProject}
                      disabled={currentProjectIndex === 0}
                      className="prev-btn"
                    >
                      <i className="fa-solid fa-chevron-left"></i> Previous
                    </button>
                    <p>
                      {currentProjectIndex === 0
                        ? ""
                        : projects[currentProjectIndex - 1].name}
                    </p>
                  </div>
                  <div className="nav-icon">
                    <img src={icon} alt="" />
                  </div>
                  <div className="next-project">
                    <button
                      onClick={goToNextProject}
                      disabled={currentProjectIndex === projects.length - 1}
                      className="next-btn"
                    >
                      Next <i className="fa-solid fa-chevron-right"></i>
                    </button>
                    <p>
                      {currentProjectIndex === projects.length - 1
                        ? ""
                        : projects[currentProjectIndex + 1].name}
                    </p>
                  </div>
                </div>
              </>
            );
          }
        })}
      </div>
    </section>
  );
};

export default ProjectDetailPage;
