import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  const interviewersClass = classNames('interviewers__item', {
    ' interviewers__item-image': props.avatar,
    ' interviewers__item--selected': props.selected
   });

  return (
    <li className={interviewersClass} onClick={() => props.setInterviewer(props.id)}>
      {
        props.selected ?
        <>
          <img
            className={interviewersClass}
            src={props.avatar}
            alt={props.name}
          />
          {props.name}
        </>
        :
        <img
          className={interviewersClass}
          src={props.avatar}
          alt={props.name}
        />
      }
    </li>
  );
}