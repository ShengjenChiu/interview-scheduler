import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

//the function of the InterviewerListItem component
export default function InterviewerListItem(props) {
  const interviewersClass = classNames('interviewers__item', {
    ' interviewers__item--selected': props.selected
   });

  //the rendering of the InterviewerListItem component
  return (
    <li className={interviewersClass} onClick={props.setInterviewer} selected={props.selected}>
      {
        props.selected ?
        <>
          <img
            className='interviewers__item-image'
            src={props.avatar}
            alt={props.name}
          />
          {props.name}
        </>
        :
        <img
          className='interviewers__item-image'
          src={props.avatar}
          alt={props.name}
        />
      }
    </li>
  );
}