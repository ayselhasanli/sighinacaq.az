import React from "react";
import "./HomePage.css";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Services from "../../components/Services/Services";
import ScheduleService from "../../components/ScheduleService/ScheduleService";
import Partners from "../../components/Partners/Partners";
import Contact from "../../components/Contact/Contact";

const HomePage = () => {
  return (
    <div className="page">
      <Hero />
      <About />
      <Projects />
      <Services/>
      <ScheduleService/>
      <Partners/>
      <Contact/>
    </div>
  );
};

export default HomePage;
