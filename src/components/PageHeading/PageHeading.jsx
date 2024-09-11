import React from "react";
import "./PageHeading.css";

const PageHeading = ({ title, img }) => {
  const sectionStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.36), rgba(0, 0, 0, 0.36)),
    url(${img})`,
    backgroundSize: "cover",
    width: "100%",
    maxHeight: "43rem", 
    height: "43rem",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  return (
    <section style={sectionStyle} className="page-heading">
        <p>{title}</p>
    </section>
  );
};

export default PageHeading;
