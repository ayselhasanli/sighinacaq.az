import React from 'react'
import "./Partners.css"
import partners_1 from "../../assets/media/partners-1.png"
import partners_2 from "../../assets/media/partners-2.png";

const Partners = () => {
  return (
    <section id="partners" className="partners">
      <div className="container">
        <h2>Our Partners</h2>
        <div className="partners-group">
          <img src={partners_1} alt="" />
          <img src={partners_2} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Partners
