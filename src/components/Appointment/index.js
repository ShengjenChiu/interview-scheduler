import "./styles.scss";
import React from 'react';
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import useVisualMode from "hooks/useVisualMode";
import { getAppointmentsForDay, getInterview } from "helpers/selectors";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
                                props.interview ? SHOW
                                : EMPTY);


  return (
    <article className="appointment">
      
        <Header time={props.time} />
        { 
          mode === 'EMPTY'
          && 
          <Empty

            onClick={() => transition(CREATE)}

          />
        }

        { 
          mode === 'SHOW'
          && 
          <Show 
            student={props.interview.student}
            interviewer={props.interview.interviewer}
          />
        }

        {
          mode === 'CREATE'
          &&
          <Form 
            interviewers={props.interviewers}
            onChange={() => transition(SHOW)}
            onCancel={() => back()}
          />
        }

        {/* {
          mode === 'SAVING'
          &&
          <>
          </>
        } */}
    </article>

  );
}


// {mode === EMPTY && <Empty onAdd={() => console.log("Clicked onAdd")} />}
// {mode === SHOW && (
//   <Show
//     student={props.interview.student}
//     interviewer={props.interview.interviewer}
//   />
// )}