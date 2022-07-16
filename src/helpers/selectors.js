import React from 'react';

//... returns an array of appointments for that day
export default function getAppointmentsForDay(state, day) {
  let appointmentsArr =[];
  
  appointmentsArr = state.days.filter(day => days.day === day);

  return appointmentsArr;
}

export default function getInterview(state, interview) {
  const interviewObject = {};

  interviewObject = {  
    "student": "Lydia Miller-Jones",
    "interviewer": {  
      "id": 1,
      "name": "Sylvia Palmer",
      "avatar": "https://i.imgur.com/LpaY82x.png"
    }
  };

  return ( interviewObject || null );
}