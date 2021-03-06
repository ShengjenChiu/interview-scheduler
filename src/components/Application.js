import React, { useEffect } from "react";
import Appointment from "./Appointment/index";
import "components/Application.scss";
import DayList from "./DayList";
import axios from "axios";
import { getAppointmentsForDay, getInterview } from "helpers/selectors";
import useApplicationData from "hooks/useApplicationData";

//the function of the Application component
export default function Application() {
  //objects fetched from the cumston hook useApplicationData
  const {
    state,
    setState,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();

  // use effect to axios request data from API
  // and receive response from API
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ])
  .then(all => {
      setState(prev => ({
        ...prev, 
        days: all[0].data, 
        appointments: all[1].data,
        interviewers: all[2].data
      }));
    });
  }, []);

  //Convert Object of objects into Array of objects
  //Turn appointment array into appointment components array
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  
  //Pass down props to the Appointment component
  const schedulerArr = dailyAppointments.map(appointment => {
    const interview = getInterview(state, appointment.interview);
  
    return (
      <Appointment
        key={appointment.id} 
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={state.interviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
        {...appointment}
      />
    );
  });

  //the rendering of the Application component with 
  //its children Daylist component and Appointment component
  return (
    <main className="layout">
      <section className="sidebar">
      <img
        className="sidebar--centered"
        src="images/logo.png"
        alt="Interview Scheduler"
      />
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu">
      <DayList
        days={state.days}
        value={state.day}
        onChange={setDay}
      />
      </nav>
      <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      />      
      </section>
      <section className="schedule">
        {schedulerArr}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}