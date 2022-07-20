import React, { useState, useEffect } from "react";
import Appointment from "./Appointment/index";
import "components/Application.scss";
import DayList from "./DayList";
import axios from "axios";
import { getAppointmentsForDay, getInterview } from "helpers/selectors";
import useApplicationData from "hooks/useApplicationData";


export default function Application() {

  // const [state, setState] = useState({
  //   day: "Monday",
  //   days: [],
  //   appointments: {},
  //   interviewers: {}
  // });

  const {
    state,
    setState,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();

  // //click on a day in the sidebar
  // //To update the day state and retainning the state for days and appointments
  // //so, we need to create new object to be called
  // //to update the state with new day
  // const setDay = day => setState({ ...state, day });


  // //change the local state to book an interview 
  // function bookInterview(id, interview) {
  //   //console.log(id, interview);

  //   //received the individual appointment
  //   const appointment = {
  //     ...state.appointments[id],
  //     interview: { ...interview }
  //   };

  //   //place the individual appointment into
  //   //the appointments object
  //   const appointments = {
  //     ...state.appointments,
  //     [id]: appointment
  //   };

  //   //send to api database and update it.
  //   return axios.put(`/api/appointments/${id}`, { 
  //     interview
  //   })
  //   .then(() => {
  //     setState({
  //       ...state,
  //       appointments
  //     });
  //   });
  // }

  // function cancelInterview(id) {

  //   console.log(id);

    // return axios.delete(`/api/appointments/${id}`, {data: { interview }});

    //     let num = Object.keys(appointments).length;

    //     console.log(appointments.id);

    //     for (let i; i < num; i++) {
    //       if (id === appointments.id) {
    //         appointments.interview = null;
    //       }
    //     }
    // });
   
  // }

  // use effect to axios request data from API
  // and receive response from API
  useEffect(() => {
    //axios.get('/api/days')
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ])
  .then(all => {
    //setDays(response.data)
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