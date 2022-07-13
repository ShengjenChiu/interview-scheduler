import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";


export default function formatSpots() {
  let returnStr = '';

  if (props.spots === 0) {
    return returnStr = 'no spots';
  } else if (props.spots === 1) {
    return returnStr = '1 spot';
  } else {
    return returnStr = `${props.spots} spots`; 
  }
};

export default function DayListItem(props) {
  const dayClass = classNames('day-list__item', {
    ' day-list__item--selected': props.selected,
    ' day-list__item--full': props.spots === 0
   });

  return (
    <li onClick={() => props.setDay(props.name)}>
      <h2 className={dayClass}>{props.name}</h2> 
      <h3 className={dayClass}>{formatSpots} remaining</h3>
    </li>
  );
}