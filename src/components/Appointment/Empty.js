import React from "react";

export default function Empty(props) {

  return (
    <main className="appointment__add">
      {console.log('Empty comp: ' + props.onClick)}


      <img
        className="appointment__add-button"
        src="images/add.png"
        alt="Add"
        onClick={props.onClick}

      />
    </main>
  );
}