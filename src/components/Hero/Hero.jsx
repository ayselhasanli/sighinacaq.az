import React, { useState , useEffect} from 'react'
import "./Hero.css"

const Hero = () => {
  const [hero, setHero] = useState([])
   useEffect(() => {
     fetch("http://localhost:3000/hero")
       .then((response) => response.json())
       .then((data) => setHero(data));
   }, []);
  return (
    <section className="hero">
      <div className="container">
        {
          hero.map((heroItem) => {
            return (
              <div>
                <p>{heroItem.heading}</p>
                <h4>
                  Delivering first-class commercial maintenance nationwide <br /> 24/7
                </h4>
                <button>Make an Enquiry</button>
              </div>
            );
          })
        }
      </div>
    </section>
  );
}

export default Hero
