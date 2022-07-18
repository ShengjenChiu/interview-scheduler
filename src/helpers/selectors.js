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
  const interviewersObj = state.interviewers;
  let interviewerId = 0;

  if (!interview) {
    return null;
  } else {
    interviewerId = interview.interviewer;
  }

  return {
    student: interview.student,
    interviewer: interviewersObj[interviewerId]
  };

}

module.exports = {
  getAppointmentsForDay,
  getInterview
};