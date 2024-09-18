import React from "react";
import PageHeading from "../../components/PageHeading/PageHeading";
import section_img from "../../assets/media/about-page.png";
import about_img from "../../assets/media/about-page-1.png";
import "./AboutPage.css";
import icon_1 from "../../assets/media/about-value-icon-1.png";
import icon_2 from "../../assets/media/about-value-icon-2.png";
import icon_3 from "../../assets/media/about-value-icon-3.png";
import icon_4 from "../../assets/media/about-value-icon-4.png";
import icon_5 from "../../assets/media/about-value-icon-5.png";
import icon_6 from "../../assets/media/about-value-icon-6.png";
import icon_7 from "../../assets/media/about-value-icon-7.png";
import icon_8 from "../../assets/media/about-value-icon-8.png";

const AboutPage = () => {
  const aboutValues = [
    {
      id: 0,
      img: icon_1,
      name: "Integrity",
      content:
        "Acting with strong ethics is a priority for everyone representing the organization as well as the company’s behaviour as a whole.",
    },
    {
      id: 1,
      img: icon_2,
      name: "Honesty",
      content:
        "It’s not just the best policy, it’s a core business practice to act in a transparent, trustworthy manner that earns the respect of colleagues, customers and the public.",
    },
    {
      id: 2,
      img: icon_3,
      name: "Fairness",
      content:
        "Treating everyone with the common decency we all deserve and expect.",
    },
    {
      id: 3,
      img: icon_4,
      name: "Accountability",
      content:
        "Accepting responsibility for your actions (and inactions) is the ultimate way to build trust internally and externally.",
    },
    {
      id: 4,
      img: icon_5,
      name: "Commitment to Deliver",
      content:
        "Creating a great customer experience begins with staying true to the words we speak and the bonds we make.",
    },
    {
      id: 5,
      img: icon_6,
      name: "Diversion & Inclusion",
      content:
        "Organisations succeed by bringing different lived experiences and a range of backgrounds into a shared environment where everyone has equal opportunity.",
    },
    {
      id: 6,
      img: icon_7,
      name: "Learning",
      content:
        "No one has all the answers. A culture of humility and continuous learning is a bedrock principle of successful companies.",
    },
    {
      id: 7,
      img: icon_8,
      name: "Temawork",
      content:
        "When people work together, they can create something greater than themselves as individuals.",
    },
  ];
  return (
    <>
      <PageHeading title={"About us"} img={section_img} />
      <section className="about-page-content">
        <div className="container">
          <div>
            <img src={about_img} alt="" />
          </div>
          <div>
            <h5>About us</h5>
            <h2>About EMS Contracting</h2>
            <p>
              Founded by Mick Donkin and Kris Armstrong in 2013We incorporate 3
              divisions: Smart-metering, Renewables and Recycling all from our
              head office in Sunderland.We employ a team of highly skilled
              engineers delivering multi-disciplinary projects which operate
              across the UK, offering a 24/7 service including emergency call
              out.We have a commitment to quality and a strong safety culture,
              ensuring that every job we do is completed correctly and safely.
            </p>
            <p>
              We pride oursleves on fostering a working culture that is based on
              our core values. This ensures the people that make EMS what it is
              can enjoy the best, most engaging and safe environment possible.
              It's the people and our values that we believe set us apart in the
              industry.
            </p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <h3>The EMS Brand Values</h3>

        <div className="container">
          {
            aboutValues.map((value) => {
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
