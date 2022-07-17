//import React from 'react';

//returns an array of appointments for that day
function getAppointmentsForDay(state, day) {
  const resultsArr = [];
  const daysObj = state.days;
  const appointmentsObj = state.appointments;

  for (let i = 0; i < daysObj.length; i++) {
    if (daysObj[i].name === day) {
      let daysAppo = daysObj[i].appointments;

      for (let j = 0; j < daysAppo.length; j++) {

        if (appointmentsObj[daysAppo[j]]) {
          resultsArr.push(appointmentsObj[daysAppo[j]]);
        }
      }
    }
  }

  return resultsArr;
}


function getInterview(state, interview) {
  const interviewObject = {};

  // interviewObject = {  
  //   "student": "Lydia Miller-Jones",
  //   "interviewer": {  
  //     "id": 1,
  //     "name": "Sylvia Palmer",
  //     "avatar": "https://i.imgur.com/LpaY82x.png"
  //   }
  // };

  // const interviewObject = state.appointments.filter(appointment => appointment.id.interview === interview);


  return ( interviewObject || null );
}

module.exports = {
  getAppointmentsForDay,
  getInterview
};