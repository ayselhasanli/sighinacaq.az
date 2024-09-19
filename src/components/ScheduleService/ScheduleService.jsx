import React from 'react'
import "./ScheduleService.css"
import icon from "../../assets/media/schedule-icon.png"
import { NavLink } from 'react-router-dom';

const ScheduleService = () => {
  return (
    <section className="schedule-service" id="scheduleService">
      <div className="container">
        <div className="schedule-content">
          <div className="icon">
            <img src={icon} alt="" />
          </div>
          <p>
            You will be satisfy with our work contact us today & help is on the
            way
          </p>
        </div>
        <div className="schedule-btn">
          <NavLink to={"/services"}>
            <button>
              Schedule a Service <i className="fa-solid fa-chevron-right"></i>
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default ScheduleService
