import React from "react";
import "./HomePage.css";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Services from "../../components/Services/Services";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services/>
    </>
  );
};

export default HomePage;
