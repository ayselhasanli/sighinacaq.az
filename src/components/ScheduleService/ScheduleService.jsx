import React, {useEffect, useState} from 'react'
import "./ScheduleService.css"
import { NavLink } from 'react-router-dom';

const ScheduleService = () => {
  const [schedule, setSchedule] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/scheduleService")
      .then((response) => response.json())
      .then((data) => setSchedule(data));
  }, []);
  return (
    <section className="schedule-service" id="scheduleService">
      <div className="container">
        {
          schedule.map((data) => {
            return (
              <>
                <div className="schedule-content">
                  <div className="icon">
                    <img src={data.icon} alt="" />
                  </div>
                  <p>
                    {data.text}
                  </p>
                </div>
                <div className="schedule-btn">
                  <NavLink to={"/services"}>
                    <button>
                      {data.btnText}
                      <i className="fa-solid fa-chevron-right"></i>
                    </button>
                  </NavLink>
                </div>
              </>
            );
          })
        }
      </div>
    </section>
  );
}

export default ScheduleService
