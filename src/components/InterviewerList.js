import React from "react";
import InterviewerListItem from 'components/InterviewerListItem.js';
import "components/InterviewerList.scss";

export default function InterviewerList(props) {
const intArr = Object.values(props.interviewers);

  const interviewersArr = intArr.map(_interviewer => {

    return (
      <InterviewerListItem
        key={_interviewer.id}
        name={_interviewer.name} 
        avatar={_interviewer.avatar} 
        selected={_interviewer.id === props.value}
        setInterviewer={() => props.onChange(_interviewer.id)}  
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewersArr}
      </ul>
    </section>
  
  );
}