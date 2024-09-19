import React, {useState, useEffect} from "react";
import "./About.css";
// import aboutImg from "./../../assets/media/about.png";
// import service1 from "./../../assets/media/about-icon-1.png";
// import service2 from "./../../assets/media/about-icon-2.png";
// import service3 from "./../../assets/media/about-icon-3.png";
// import service4 from "./../../assets/media/about-icon-4.png";

const About = () => {
   const [about, setAbout] = useState([]);
   useEffect(() => {
     fetch("http://localhost:3000/aboutSection")
       .then((response) => response.json())
       .then((data) => setAbout(data));
   }, []);
  return (
    <section className="about" id="about">
      <div className="container">
        {
          about.map((aboutItem) => {
            return (
              <>
                <div className="about-img">
                  <img src={aboutItem.img} alt="about-img" />
                </div>
                <div className="about-content">
                  <h5>About us</h5>
                  <h2>{aboutItem.heading}</h2>
                  <p>
                    {aboutItem.text}
                  </p>
                  <div className="about-services">
                    {
                      aboutItem.iconGroup.map((icon) => {
                        return (
                          <div key={icon.id}>
                            <img
                              src={icon.icon}
                              alt="service-icon"
                            />
                          </div>
                        );
                      })
                    }
                  </div>

                  <div className="about-button">
                    <button>
                      See More <i className="fa-solid fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </>
            );
          })
        }
      </div>
    </section>
  );
};

export default About;
