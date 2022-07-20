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

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const EDIT = "EDIT";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";


export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW
    : EMPTY);

  const messageSave = "some error during saving";
  const messageDelete = "some error during deleting";

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);
    
    props.bookInterview(props.id, interview)
    .then(() => {
      onCompleteS();
    })
    .catch(error => transition(ERROR_SAVE, true));
    ;
  }


  //create new form
  function onAdd() {
    transition(CREATE);
  }          
   
  //cancel current mode
  function onCancel() {
    back();
  }
  
  //turn to edit mode
  function onEdit() {
    transition(EDIT);
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
    transition(DELETING, true);
    props
    .cancelInterview(props.id)
    .then(() => {
      onComplete();
    })
    .catch(error => {
        transition(ERROR_DELETE, true)
      }
    );
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
          mode === 'SHOW'
          && 
          <Show
            student={props.interview.student}
            interviewer={
              props.interview.interviewer
            }
            interviewers={props.interviewers}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        }

        {
          mode === 'EDIT'
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
          mode === 'CONFIRM'
         &&
          <Confirm
            onCancel={onCancel}
            onConfirm={onConfirm}
          />
        }

        {
          mode === 'DELETING'
         &&
          <Status
            onComplete={onComplete}
          />
        } 

        {
          mode === 'ERROR_SAVE'
         &&
          <Error
            message={messageSave}
            onCancel={onCancel}
          />
        }

        {
          mode === 'ERROR_DELETE'
         &&
          <Error 
            message={messageDelete}
            onCancel={onCancel}
          />
        }
    </article>
  );
}