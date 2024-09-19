import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ name, img, btn_text }) => {
  return (
    <div className="project-card">
      <div className="card-img">
        <img src={img} alt="" />
        <div className="img-overlay"></div>
      </div>
      <p>{name}</p>
      <button>
        {btn_text} <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default ProjectCard;
