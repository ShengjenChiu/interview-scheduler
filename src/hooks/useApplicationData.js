import React, { useState } from "react";
import axios from "axios";

//function of the cumston hook useApplicationData
export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  //To update the day state and retainning the state for days and appointments and 
  //to create new objects to be called to update the state with new day
  const setDay = day => setState({ ...state, day });


  //variable that keep track of number of spots available for each day.
  //let availSpots = 0;


  function spotsAvailDay(newState, newAppointments) {
    // const numDays = state.days.length;
    // const numAppoi = 5;
    // return spotsAvail;
    
    return newState.days.map((day) => {
      let spotsAvail = 0;

      for (let id of day.appointments) {
        if (!newAppointments[id].interview) {
          spotsAvail++;
        }
      }
      return {
        ...day,
        spots: spotsAvail
      };
    });

  }


  //change the local state to book an interview 
  function bookInterview(id, interview) {

    //received the individual appointment
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    //place the individual appointment into
    //the appointments object
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = spotsAvailDay(state, appointments);

    //send to api database and update it.
    return axios.put(`/api/appointments/${id}`, { 
      interview
    })
    .then(() => {
      setState({
        ...state,
        appointments,
        days
      });
    });
  }

  //change the local state to cancel an interview
  function cancelInterview(id) {
    //let the individual appointment
    //have a null interview
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    //place the individual appointment into
    //the appointments object
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = spotsAvailDay(state, appointments);

    //return the updated appointment
    //back to api database
    //and update the local appointments object
    return axios.delete(`/api/appointments/${id}`)
    .then(() => {
      setState({
        ...state,
        appointments,
        days
      });
    });
  
  }

  //return all useApplicationData's objects
  return { 
           state,
           setState,
           setDay,
           bookInterview,
           cancelInterview
         };
}