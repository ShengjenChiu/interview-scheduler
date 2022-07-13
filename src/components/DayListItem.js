import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";


export default function DayListItem(props) {
  const dayClass = classNames('day-list__item', {
    ' day-list__item--selected': props.selected,
    ' day-list__item--full': props.spots === 0
   });

  const formatSpots = () => {
    let retStr = '';

    if (props.spots === 0) {
      retStr = "no spots";
    } else if (props.spots === 1) {
      retStr = "1 spot";
    } else {
      retStr = props.spots + " spots"; 
    }
  
    console.log('retStr-aft-if: ' + retStr);
  
    return retStr;
  };

  console.log('formatSpots(): ' + formatSpots());


  return (
    <li onClick={() => props.setDay(props.name)}>
      <h2 className={dayClass}>{props.name}</h2> 
      <h3 className={dayClass}>{formatSpots} remaining</h3>
    </li>

  );
}