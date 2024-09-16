import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, img }) => {
  return (
    <div className="project-card">
      <div className="card-img">
        <img src={img} alt="" />
        <div className="img-overlay"></div>
      </div>
      <p>{title}</p>
      <button>
        Book now <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default ProjectCard;
