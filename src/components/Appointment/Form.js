import React, {useState} from "react";
import InterviewerList from '../InterviewerList.js';
import Button from "../Button.js";
 

export default function Form(props) {
  // let studentName = props.appointment.student;
  // let interviewer = props.appointment.interviewer;

  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] =useState(props.interviewer || null);

  // const reset = () => {
  //   setStudent();
  //   setInterviewer();
  // };

  // const cancel = () => {
  //   props.onCancel = reset();
  // }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"

            value={student}
            onChange={(event) => setStudent(event.target.value)}

          />
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          value={props.interviewer}
          onChange={(interviewer) => setInterviewer(interviewer)}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={() => props.onCancel()}>
            Cancel
          </Button>
          <Button confirm onClick={() => props.onSave( student,interviewer)}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
