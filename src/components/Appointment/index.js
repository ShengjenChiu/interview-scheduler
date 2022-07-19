import "./styles.scss";
import React from 'react';
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
// import confirm from "./confirm";
// import Error from "./Error";
// import Status from "./Status";
import useVisualMode from "hooks/useVisualMode";
import { getAppointmentsForDay, getInterview } from "helpers/selectors";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
                                props.interview ? SHOW
                                : EMPTY);
  
  function onAdd() {
    transition(CREATE);
    //console.log("clicked onAdd!");
  }
                                
 
  function onCancel() {
    back();
  }

  // function onSave() {
  //   transition(SAVING);
  // }

  return (
    <article className="appointment">
      
        <Header time={props.time} />
        { 
          mode === 'EMPTY'
          && 
          <Empty

            onClick={() => onAdd()}

          />
        }

        { 
          mode === 'SHOW'
          && 
          <Show 
            student={props.interview.student}
            interviewer={props.interview.interviewer}
            // onEdit={onEdit}
            // onDelete={onDelete}
          />
          
        }

        {
          mode === 'CREATE'
          &&
          (<Form 
            interviewers={props.interviewers}
            onChange={() => transition(SHOW)}
            // onSave={() => onSave()}
            onCancel={() => onCancel()}
          />)
          // console.log("this is form")
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