import React, { useState } from "react";
import "./ServiceDetail.css";
import service_img_1 from "../../assets/media/service-detail-1.png";
import service_img_2 from "../../assets/media/service-detail-2.png";
import service_img_3 from "../../assets/media/service-detail-3.png";
import service_img_4 from "../../assets/media/service-detail-4.png";
import service_img_5 from "../../assets/media/service-detail-5.png";
import service_img_6 from "../../assets/media/service-detail-6.png";
import service_icon_1 from "../../assets/media/service-icon-1.png";
import service_icon_2 from "../../assets/media/service-icon-2.png";
import service_icon_3 from "../../assets/media/service-icon-3.png";
import service_icon_4 from "../../assets/media/service-icon-4.png";

const ServiceDetail = () => {
  const [activeSection, setActiveSection] = useState("electrical");
  const [showContent, setShowContent] = useState(true);

  const handleSectionChange = (section) => {
    setShowContent(false);
    setTimeout(() => {
      setActiveSection(section);
      setShowContent(true);
    }, 300);
  };

  return (
    <section className="service-detail" id="serviceDetail">
      <div className="container">
        <nav className="navbar">
          <ul>
            <li
              className={`${
                activeSection === "electrical"
                  ? "active-section section-animation"
                  : ""
              }`}
              onClick={() => handleSectionChange("electrical")}
            >
              Electrical And Mechanical
            </li>
            <li
              className={`${
                activeSection === "airConditioning"
                  ? "active-section  section-animation"
                  : ""
              }`}
              onClick={() => handleSectionChange("airConditioning")}
            >
              Air Conditioning And Ventilation
            </li>
            <li
              className={`${
                activeSection === "refrigeration"
                  ? "active-section  section-animation"
                  : ""
              }`}
              onClick={() => handleSectionChange("refrigeration")}
            >
              Refrigeration
            </li>
            <li
              className={`${
                activeSection === "renewableEnergy"
                  ? "active-section  section-animation"
                  : ""
              }`}
              onClick={() => handleSectionChange("renewableEnergy")}
            >
              Renewable Energy And Heating
            </li>
            <li
              className={`${
                activeSection === "gasMetering"
                  ? "active-section  section-animation"
                  : ""
              }`}
              onClick={() => handleSectionChange("gasMetering")}
            >
              Electricity and Gas Metering
            </li>
            <li
              className={`${
                activeSection === "gasRegulation"
                  ? "active-section  section-animation"
                  : ""
              }`}
              onClick={() => handleSectionChange("gasRegulation")}
            >
              F Gas Regulation
            </li>
            <li
              className={`${
                activeSection === "wasteRecycling"
                  ? "active-section  section-animation"
                  : ""
              }`}
              onClick={() => handleSectionChange("wasteRecycling")}
            >
              Waste Recycling
            </li>
          </ul>
        </nav>
        
        <div className="content">
          {activeSection === "electrical" && (
            <div className={`content-section ${showContent ? "show" : ""}`}>
              <div>
                <img src={service_img_1} alt="" />
              </div>
              <h2>Electrical And Mechanical Services</h2>
              <p>We provide a comprehensive service that offers:</p>
              <h5>Electrical</h5>
              <ul>
                <li>Domestic Installations And Maintenance</li>
                <li>Commercial Installations And Maintenance</li>
                <li>Industrial installations and maintenance</li>
                <li>Bespoke lighting designs</li>
                <li>LED Energy Saving Schemes</li>
                <li>Fixed Wiring Inspection And Testing</li>
                <li> Fault finding and diagnostic</li>
                <li>Portable appliance testing</li>
                <li>PAT testing and other safety testing and inspection</li>
                <li>PPM</li> <li>Callouts</li>
              </ul>
              <h5>Mechanical</h5>
              <ul>
                <li>
                  Our Mechanical Services Team offer a first class service from
                  high velocity lip extraction systems to to full Gas safety
                  interlock supply and extract systems
                </li>
                <li>
                  We have our own workshop facilities where we can design,
                  install and maintain all works.
                </li>
              </ul>
            </div>
          )}

          {activeSection === "airConditioning" && (
            <div className={`content-section ${showContent ? "show" : ""}`}>
              <div>
                <img src={service_img_2} alt="" />
              </div>
              <h2>Air Conditioning and Ventilation Services</h2>
              <p>
                From the smallest of jobs to large scale projects, we will
                provide a tailored design to suit your needs. From the initial
                specification right through to the end proposal, we ensure our
                high standards are maintained throughout, regardless of the size
                and value of the job.
              </p>
              <h5>Air Conditioning Design</h5>
              <ul>
                <li>Free site survey </li>
                <li> Comprehensive design information</li>
                <li> Unbiased equipment selection</li>
                <li> Split systems</li>
                <li>VRF and VRV systems</li>
                <li>Air handling equipment</li>
              </ul>
              <h5>Ventilation Services</h5>
              <ul>
                <li>
                  Manufacturing, distribution and installation of all aspects of
                  duct work and ventilation products
                </li>
                <li>
                  All work undertaken complies with industry standard DW144.
                </li>
              </ul>
            </div>
          )}

          {activeSection === "refrigeration" && (
            <div className={`content-section ${showContent ? "show" : ""}`}>
              <div>
                <img src={service_img_3} alt="" />
              </div>
              <h2>Refrigeration Services</h2>
              <p>
                From the smallest of jobs to large scale projects, we will
                provide a tailored design to suit your needs. From the initial
                specification right through to the end proposal, we ensure our
                high standards are maintained throughout, regardless of the size
                and value of the job.
              </p>
              <h5>We cover the following:</h5>
              <ul>
                <li>Free site survey </li>
                <li> Comprehensive design information</li>
                <li> Unbiased equipment selection</li>
              </ul>
            </div>
          )}
          {activeSection === "renewableEnergy" && (
            <div className={`content-section ${showContent ? "show" : ""}`}>
              <div>
                <img src={service_img_4} alt="" />
              </div>
              <h2>Renewable Energy and Heating</h2>
              <p>
                We can provide you with a range of solutions to save money and
                reduce your carbon footprint.
              </p>
              <h5>Installations include:</h5>
              <ul>
                <li>Free site survey </li>
                <li> Comprehensive design information</li>
                <li> Unbiased equipment selection</li>
                <li> Split systems</li>
                <li>VRF and VRV systems</li>
              </ul>
            </div>
          )}
          {activeSection === "gasMetering" && (
            <div className={`content-section ${showContent ? "show" : ""}`}>
              <div>
                <img src={service_img_5} alt="" />
              </div>
              <h2>Electricity and Gas Meter Installation</h2>
              <p>
                We can provide you with a range of solutions to save money and
                reduce your carbon footprint.
              </p>
              <h5>Installations include:</h5>
              <ul>
                <li>
                  Dedicated metering team with capacity for growth to clients
                  requirements
                </li>
                <li> Comprehensive design information</li>
                <li> Unbiased equipment selection</li>
                <li> Split systems</li>
                <li>VRF and VRV systems</li>
              </ul>
            </div>
          )}

          {activeSection === "gasRegulation" && (
            <div className={`content-section ${showContent ? "show" : ""}`}>
              <div>
                <img src={service_img_6} alt="" />
              </div>
              <h2>F Gas Regulation</h2>
              <p>
                The use of virgin and reclaimed R22 gas is now prohibited. To
                comply with the current legal requirements and legislation.
              </p>
              <h5> we can offer two options:</h5>
              <ul>
                <li>
                  Convert your existing system to make it compatible with a
                  replacement refrigerant. While this offers businesses a
                  reduced initial expenditure compared to full replacement, the
                  disadvantage could be that no replacement refrigerants offer
                  an exact match to the thermal properties of R22 which could
                  result in reduced capacity and compromise efficiency.
                </li>
                <li>
                  Replacing your R22 equipment with a new system which is
                  compatible with modern refrigerants. The benefits include a
                  reduced energy consumption and maintenance costs, plus a
                  prolonged service life over a refrigerant conversion,
                  protecting you from increased breakdowns and potential impact
                  on product quality or stock loss. While this option means a
                  larger initial expenditure, this can be offset by the
                  benefits.
                </li>
              </ul>
            </div>
          )}

          {activeSection === "gasMetering" && (
            <div className={`content-section ${showContent ? "show" : ""}`}>
              <div>
                <img src={service_img_5} alt="" />
              </div>
              <h2>Electricity and Gas Meter Installation</h2>
              <p>
                We can provide you with a range of solutions to save money and
                reduce your carbon footprint.
              </p>
              <h5>Installations include:</h5>
              <ul>
                <li>
                  Dedicated metering team with capacity for growth to clients
                  requirements
                </li>
                <li> Comprehensive design information</li>
                <li> Unbiased equipment selection</li>
                <li> Split systems</li>
                <li>VRF and VRV systems</li>
              </ul>
            </div>
          )}

          {activeSection === "wasteRecycling" && (
            <div className={`content-section ${showContent ? "show" : ""}`}>
              <div>
                <img src={service_img_6} alt="" />
              </div>
              <h2>Waste Recycling</h2>
              <p>Working towards a cleaner environment</p>
              <h5>How?</h5>
              <ul>
                <li>Industrial / Commercial Waste and Recycling</li>
                <li>Metal</li>
                <li>Waste Management</li>
              </ul>
            </div>
          )}

          <div className="service-details">
            <ul>
              <li>
                <img src={service_icon_1} alt="" />
                <p>Low Cost</p>
              </li>
              <li>
                <img src={service_icon_2} alt="" />
                <p>Available 24 Hours</p>
              </li>
              <li>
                <li>
                  <img src={service_icon_3} alt="" />
                  <p>Lisences & Insured</p>
                </li>
              </li>
              <li>
                <li>
                  <img src={service_icon_4} alt="" />
                  <p>Skilled Handyman</p>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
