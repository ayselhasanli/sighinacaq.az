import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="section-heading">
        <h2>Projects</h2>
      </div>
      <div className="container">
        <div className="project-cards">
          <Swiper
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {projects.map((project) => {
              return (
                <SwiperSlide>
                  <NavLink to={`/projects/${project.id}`}>
                    <ProjectCard
                      key={project.id}
                      name={project.name}
                      img={project.img}
                      btn_text={project.btn_text}
                    />
                  </NavLink>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
