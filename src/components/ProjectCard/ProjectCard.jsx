import React from 'react'
import "./ProjectCard.css"

const ProjectCard = ({title, img}) => {
  return (
    <div className="project-card">
      <img src={img} alt="" />
      <div className="img-overlay">
        <p>{title}</p>
        <button>
          Book now <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default ProjectCard
