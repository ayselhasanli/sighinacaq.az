import React, {useState, useEffect} from "react";
import PageHeading from "../../components/PageHeading/PageHeading";
import section_img from "../../assets/media/about-page.png";
import "./AboutPage.css"; 

const AboutPage = () => {
    const [values, setValues] = useState([]);
    const [aboutSection, setAboutSection] = useState([])
    useEffect(() => {
      fetch("http://localhost:3000/aboutValues")
        .then((response) => response.json())
        .then((data) => setValues(data));
    }, []); 
    useEffect(() => {
      fetch("http://localhost:3000/aboutSection")
        .then((response) => response.json())
        .then((data) => setAboutSection(data));
    }, []);
  return (
    <>
      <PageHeading title={"About us"} img={section_img} />
      <section className="about-page-content">
        <div className="container">
          {
            aboutSection.map((section) => {
              return (
                <>
                  <div><img src={section.img} alt="" /></div>
                  <div>
                    <h5>About us</h5>
                    <h2>{section.heading}</h2>
                    <p>{section.text}</p>
                  </div>
                </>
              );
            })
          }
        </div>
      </section>

      <section className="about-values">
        <h3>The EMS Brand Values</h3>

        <div className="container">
          {
            values.map((value) => {
              return(
                <div key={value.id} className="value-card">
                <div className="card-heading">
                  <div className="value-name">
                    <p>{value.name}</p>
                  </div>
                  <div className="value-icon">
                    <img src={value.img} alt="" />
                  </div>
                </div>
                <div className="card-desc">
                  <p>
                    {value.content}
                  </p>
                </div>
              </div>
              )
            })
          } 
        </div>
      </section>
    </>
  );
};

export default AboutPage;
