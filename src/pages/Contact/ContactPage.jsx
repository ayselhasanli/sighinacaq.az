import React, {useState, useEffect} from 'react'
import PageHeading from '../../components/PageHeading/PageHeading'
import section_img from "../../assets/media/contact-page.png"
import Contact from '../../components/Contact/Contact'
import "./ContactPage.css"

const ContactPage = () => {
   const [team, setTeam] = useState([]);
   useEffect(() => {
     fetch("http://localhost:3000/team")
       .then((response) => response.json())
       .then((data) => setTeam(data));
   }, []); 
  return (
    <>
      <PageHeading title={"Contact"} img={section_img} />
      <Contact />
      <section id="team" className="team">
        <p className="team-heading">
          MEET OUR <span>BEST TEAM</span>
        </p>

        <div className="team-cards">
          {
            team.map((teamInfo)=>{
              return (
                <div className="team-card" key={teamInfo.id}>
                  <div className="card-img">
                    <img src={teamInfo.img} alt="" />
                  </div>
                  <div className="card-info">
                    <p className="name-info">{teamInfo.name}</p>
                    <p className="mail-info">{teamInfo.mail}</p>
                  </div>
                </div>
              );
            })
          } 
        </div>
      </section>
    </>
  );
}

export default ContactPage
