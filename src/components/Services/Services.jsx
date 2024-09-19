import React, {useState, useEffect} from "react";
import "./Services.css"; 
import ProjectCard from "../ProjectCard/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="services" id="services">
      <div className="section-heading">
        <h2>Services</h2>
      </div>
      <div className="container">
        <div className="service-cards">
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
            {services.map((service) => {
              return (
                <SwiperSlide>
                  <NavLink to={`/services/${service.id}`}>
                    <ProjectCard
                      key={service.id}
                      name={service.name}
                      img={service.img}
                      btn_text={service.btn_text}
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

export default Services;
