import React, { useState, useEffect } from "react";
import "./Contact.css"; 

const Contact = () => {
  const [error, setError] = useState("");
  const [contactList, setContactList] = useState([])
  const handleInputChange = (e) => {
    const value = e.target.value;

    if (!value.trim()) {
      setError("This field is required.");
    } else {
      setError("");
    }
  };

   useEffect(() => {
     fetch("http://localhost:3000/contactList")
       .then((response) => response.json())
       .then((data) => setContactList(data));
   }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      // Submit form
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="orange-background"></div>
        <div className="form-container">
          <p className="contact-heading">
            Get in <span>Touch</span>
          </p>
          <p className="contact-description">
            Services from us are trusted, reliable and professional. Please fill
            out the form completely, and we will get back to you as soon as
            possible
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={handleInputChange}
              placeholder="Name"
            />
            <input
              type="text"
              onChange={handleInputChange}
              placeholder="Email"
            />
            <input
              type="text"
              onChange={handleInputChange}
              placeholder="Phone Number"
            />
            <select name="cars" id="cars" form="carform">
              <option value="">How did you find us? </option>
            </select>
            {error && <p>{error}</p>}
            <button type="submit">SEND</button>
          </form>
          <div className="contact-list">
            <ul>
              {
                contactList.map((contact) => {
                  return (
                    <li key={contact.id}>
                      <div className="icon">
                        <img src={contact.icon} alt="" />
                      </div>
                      <div className="content">
                        <p className="content-head">{contact.contact} </p>
                        <p className="content-desc">{contact.info}</p>
                      </div>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24309.682136134594!2d49.8006213!3d40.3931136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030877bd47f05b5%3A0xd9f14307490655a3!2sMelissa%20Park!5e0!3m2!1str!2saz!4v1725879268920!5m2!1str!2saz"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
