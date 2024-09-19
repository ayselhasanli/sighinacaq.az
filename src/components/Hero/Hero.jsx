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
              <>
                <p>{heroItem.heading}</p>
                <h3>{heroItem.text}</h3>
                <button>Make an Enquiry</button>
              </>
            );
          })
        }
      </div>
    </section>
  );
}

export default Hero
