//import React from 'react';

const state = {
  days: [
    {
      id: 1,
      name: "Monday",
      appointments: [
        1,
        2,
        3,
        4,
        5
      ],
      interviewers: [
        2,
        6,
        8,
        9,
        10
      ],
      spots: 4
    },
    {
      id: 2,
      name: "Tuesday",
      appointments: [
        6,
        7,
        8,
        9,
        10
      ],
      interviewers: [
        4,
        5,
        6,
        8,
        9
      ],
      spots: 2
    },
  ],
  appointments: {
    "1": { id: 1, time: "12pm", interview: null },
    "2": { id: 2, time: "1pm", interview: null },
    "3": {
      id: 3,
      time: "2pm",
      interview: { student: "Archie Cohen", interviewer: 2 }
    },
    "4": { id: 4, time: "3pm", interview: null },
    "5": {
      id: 5,
      time: "4pm",
      interview: { student: "Chad Takahashi", interviewer: 2 }
    }
  },
  interviewers: {
    "1": {  
      "id": 1,
      "name": "Sylvia Palmer",
      "avatar": "https://i.imgur.com/LpaY82x.png"
    },
    "2": {
      id: 2,
      name: "Tori Malcolm",
      avatar: "https://i.imgur.com/Nmx0Qxo.png"
    },
    "3": {
      id: 3,
      name: "Mildred Nazir",
      avatar: "https://i.imgur.com/T2WwVfS.png"
    },
    "4": {
      id: 4,
      name: "Cohana Roy",
      avatar: "https://i.imgur.com/FK8V841.jpg"
    },
    "5": {
      id: 5,
      name: "Sven Jones",
      avatar: "https://i.imgur.com/twYrpay.jpg"
    },
    "6": {
      id: 6,
      name: "Susan Reynolds",
      avatar: "https://i.imgur.com/TdOAdde.jpg"
    },
    "7": {
      id: 7,
      name: "Alec Quon",
      avatar: "https://i.imgur.com/3tVgsra.jpg"
    },
    "8": {
      id: 8,
      name: "Viktor Jain",
      avatar: "https://i.imgur.com/iHq8K8Z.jpg"
    },
    "9": {
      id: 9,
      name: "Lindsay Chu",
      avatar: "https://i.imgur.com/nPywAp1.jpg"
    },
    "10": {
      id: 10,
      name: "Samantha Stanic",
      avatar: "https://i.imgur.com/okB9WKC.jpg"
    }
  }
};

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

//fetch an interview
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

//returns an array of Interviewers for that day
function getInterviewersForDay(state, day) {
  const resultsArr = [];
  const daysObj = state.days;
  const interviewersObj = state.interviewers;

  for (let i = 0; i < daysObj.length; i++) {
    if (daysObj[i].name === day) {
      let daysInterviewers = daysObj[i].interviewers;

      for (let j = 0; j < daysInterviewers.length; j++) {

        if (interviewersObj[daysInterviewers[j]]) {
          resultsArr.push(interviewersObj[daysInterviewers[j]]);
        }
      }
    }
  }

  console.log(resultsArr);

  return resultsArr;
}

//change the local state to book an interview 
function bookInterview(id, interview) {
  console.log(id, interview);
}

//the child appointment component can call the action with the correct data
//where user can save the interview appointmenet
function save(name, interviewer) {
  const interview = {
    student: name,
    interviewer
  };
}

module.exports = {
  getAppointmentsForDay,
  getInterview,
  getInterviewersForDay,
  bookInterview,
  save
};