import React, { useState, useEffect } from "react";
import Appointment from "./Appointment/index";
import "components/Application.scss";
import DayList from "./DayList";
import axios from "axios";
//import { getAppointmentsForDay, getInterview } from "helpers/selectors";

const appointments = {
  "1": {
    id: 1,
    time: "12pm",
  },
  "2": {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer:{
        id: 3,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  "3": {
    id: 3,
    time: "2pm",
  },
  "4": {
    id: 4,
    time: "3pm",
    interview: {
      student: "Archie Andrews",
      interviewer:{
        id: 4,
        name: "Cohana Roy",
        avatar: "https://i.imgur.com/FK8V841.jpg",
      }
    }
  },
  "5": {
    id: 5,
    time: "4pm",
  },
  "last": {
    id: "last",
    time: "5pm",
  }
};


const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];


export default function Application() {
  // const [interviewer, setInterviewer] = useState(null);

  const [day, setDay] = useState('Monday');
  const [days, setDays] = useState([]);
  // const [appointments, setAppointments] = useState({})

  // const setADay = () => setDay(days.name);
  //const setCurrentInterviewer = () => setInterviewer(interviewer.id);

  // const [state, setState] = useState({
  //   day: "Monday",
  //   days: [],
  //   appointments: {}
  // });

  // const dailyAppointments = [];

  // dailyAppointments = getAppointmentsForDay(state, state.day)
  

  //create a new object for: When we click on a day in the sidebar, 
  //we need to update the day state. 
  //We want to do this while retaining the state for days and appointments.
  // const state = { day: "Monday", days: [] };
  // setState({ ...state, day: "Tuesday" });

  // const setDay = day => setState({ ...state, day });

  // const setDays = (days) => {
  //   ... your code here ...
  // }

  // setState(prev => ({ ...prev, days }));


  useEffect(() => {
    axios.get('/api/days')
  .then(response => {
    console.log(response.data);
    setDays(response.data)
  });
    //  axios.get(' /api/appointments', {})
  // .then(response => setDays(response.data));
  //      axios.get(' /api/interviewers', {})
  // .then(response => setDays(response.data));
  }, []);


  // Promise.all([
  //   axios.get('/api/days'),
  //   axios.get('/api/appointments'),
  //   axios.get('/api/interviewers')
  // ]).then((all) => {
      // setState(prev => ({
      //                     ...prev, 
      //                     "/api/days": all[0], 
      //                     "/api/appointments": all[1], 
      //                     "/api/interviewers": all[2] 
      //                   }));
  // });

  //to generate the Appointment components
  // const appointments = getAppointmentsForDay(state, state.day);
  // const schedule = appointments.map((appointment) => {
  //   const interview = getInterview(state, appointment.interview);

  //   return (
  //     <Appointment
  //       key={appointment.id}
  //       id={appointment.id}
  //       time={appointment.time}
  //       interview={interview}
  //       //interview={appointment.interview}
  //     />
  //   );
  // });


  //Convert Object of objects into Array of objects
  //Turn appointment array into appointment components array
  // dailyAppointments.map(appointment =>
  const schedulerArr = Object.values(appointments).map(appointment => {
    return (
      <Appointment 
        key={appointment.id} 
        id={appointment.id} 
        time={appointment.time} 
        interview={appointment.interview} 
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
        days={days}
        value={day}
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
      </section>
    </main>
  );
}

// {/* <DayList
//     days={state.days}
//     day={state.day}
//     setDay={.....}
// /> */}