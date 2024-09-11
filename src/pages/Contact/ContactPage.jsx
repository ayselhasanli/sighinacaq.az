import React from 'react'
import PageHeading from '../../components/PageHeading/PageHeading'
import section_img from "../../assets/media/contact-page.png"
import Contact from '../../components/Contact/Contact'
import "./ContactPage.css"
import team_1 from "../../assets/media/team-1.png"
import team_2 from "../../assets/media/team-2.png";
import team_3 from "../../assets/media/team-3.png";

const ContactPage = () => {
  return (
    <>
      <PageHeading title={"Contact"} img={section_img} />
      <Contact />
      <section id="team" className="team">
        <p className="team-heading">
          MEET OUR <span>BEST TEAM</span>
        </p>

        <div className="team-cards">
          <div className="team-card">
            <div className="card-img">
              <img src={team_1} alt="" />
            </div>
            <div className="card-info">
              <p className="name-info">Mick Donkin</p>
              <p className="mail-info">parashard641@gmail.com</p>
            </div>
          </div>
          <div className="team-card">
            <div className="card-img">
              <img src={team_2} alt="" />
            </div>
            <div className="card-info">
              <p className="name-info">Kris Armstrong</p>
              <p className="mail-info">parashard641@gmail.com</p>
            </div>
          </div>
          <div className="team-card">
            <div className="card-img">
              <img src={team_3} alt="" />
            </div>
            <div className="card-info">
              <p className="name-info">Daryl Shepherd</p>
              <p className="mail-info">parashard641@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage
