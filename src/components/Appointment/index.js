import "./styles.scss";
import React from 'react';
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Confirm from "./Confirm";
import Error from "./Error";
import Status from "./Status";
import useVisualMode from "hooks/useVisualMode";
import { getAppointmentsForDay, getInterview } from "helpers/selectors";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";


export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW
    : EMPTY);

    function save(name, interviewer) {
      const interview = {
        student: name,
        interviewer
      };

      transition(SAVING);

      //const interview = props.onSave(studnetNme, interviewer);
    
      props.bookInterview(props.id, interview)
      .then(() => {
        onCompleteS();
      });
    }


  //create new form
  function onAdd() {
    transition(CREATE);
  }          
 
  function onCancel() {
    back();
  }

  // function onSave(name, interviewer) {
  //   transition(SAVING);
  // }
  
  //after saving
  function onCompleteS() {
    transition(SHOW);
  }
  
  //Start the deleting operation
  function onDelete() {
    transition(CONFIRM);
  }

  //before deleting
  function onConfirm() {
    transition(DELETING);
  }

  //after deleting
  function onComplete() {
    transition(EMPTY);
  }

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
            onSave={save}
            onCancel={onCancel}
          />)
        }

        {
          mode === 'SAVING'
         &&
          <Status 
            onCompleteS={onCompleteS}
          />
        }

        {
          mode === 'ERROR_SAVE'
         &&
          <Error 
          onCancel={onCancel}
          />
        }

        {
          mode === 'ERROR_DELETE'
         &&
          <Error 
          onCancel={onCancel}
          />
        }


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