import React from "react";

export default function Show(props) {
  let num = Object.keys(props.interviewers).length;
  
  const getInterviewerName = function(id) {
    // for (let i = 0; i <  num; i++) {
    //   console.log(props.interviewers[i.toString()]["id"]);

    //   if(id === props.interviewers[i.toString()]["id"]) {

    //     console.log(props.interviewers);
    //     return props.interviewers[i.toString()]["name"];
    //   }
    // }
  }

  return (
    <main className="appointment__card appointment__card--show">
      <section className="appointment__card-left">
        <h2 className="text--regular">{props.student}</h2>
        <section className="interviewer">
          <h4 className="text--light">Interviewer</h4>
          <h3 className="text--regular">{getInterviewerName(props.interviewer)}</h3>
        </section>
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <img
            className="appointment__actions-button"
            src="images/edit.png"
            alt="Edit"
            onClick={props.onEdit}
          />
          <img
            className="appointment__actions-button"
            src="images/trash.png"
            alt="Delete"
            onClick={props.onDelete}
          />
        </section>
      </section>
    </main>
  );
}