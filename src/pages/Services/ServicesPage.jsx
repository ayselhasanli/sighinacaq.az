import React, {useState, useEffect} from 'react'
import { NavLink } from "react-router-dom";
import PageHeading from '../../components/PageHeading/PageHeading';
import section_img from "../../assets/media/services-page.jpg"
import ProjectCard from '../../components/ProjectCard/ProjectCard'; 
import "./ServicesPage.css";


const ServicesPage = () => {
   const [services, setServices] = useState([]);
   useEffect(() => {
     fetch("http://localhost:3000/services")
       .then((response) => response.json())
       .then((data) => setServices(data));
   }, []); 
  return (
    <>
      <PageHeading title={"Services"} img={section_img} />
      <section className="services-page">
        <div className="container">
          {services.map((service) => {
            return (
              <NavLink to={`/services/${service.id}`}>
                <ProjectCard
                  key={service.id}
                  title={service.title}
                  img={service.img}
                  btn_text={service.btn_text}
                />
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default ServicesPage
