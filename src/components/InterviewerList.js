import React from "react";
import InterviewerListItem from 'components/InterviewerListItem.js';
import "components/InterviewerList.scss";

export default function InterviewerList(props) {
  let interviewersArr = [];

  interviewersArr = props.interviewers.map(_interviewer => {

    return (
      <InterviewerListItem
        key={_interviewer.id}
        name={_interviewer.name} 
        avatar={_interviewer.avatar} 
        selected={_interviewer.name === props.interviewer}
        setInterviewer={props.setInterviewer}  
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