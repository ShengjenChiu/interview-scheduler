import React, { useState } from "react";
import axios from "axios";


export default function useApplicationData() {
  // const [state, setState] = useState();
  // const [day, setDay] = useState('Monday');
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  //To update the day state and retainning the state for days and appointments
  //so, we need to create new object to be called
  //to update the state with new day
  const setDay = day => setState({ ...state, day });

  //change the local state to book an interview 
  function bookInterview(id, interview) {
    //console.log(id, interview);

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

    //send to api database and update it.
    return axios.put(`/api/appointments/${id}`, { 
      interview
    })
    .then(() => {
      setState({
        ...state,
        appointments
      });
    });
  }

  function cancelInterview(id) {

    console.log(id);

    //received the individual appointment
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


    return axios.delete(`/api/appointments/${id}`)
    .then(() => {
      setState({
        ...state,
        appointments
      });
    });
  
  }


  return { 
           state,
           setState,
           setDay,
           bookInterview,
           cancelInterview
         };
}