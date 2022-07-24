import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

//the function of the DayListItem component
export default function DayListItem(props) {
  const dayClass = classNames('day-list__item', {
    ' day-list__item--selected': props.selected,
    ' day-list__item--full': props.spots === 0
   });

  //the helper function for displaying proper spots remaining number
  const formatSpots = () => {
    let retStr = '';

    if (props.spots === 0) {
      retStr = "no spots";
    } else if (props.spots === 1) {
      retStr = "1 spot";
    } else {
      retStr = props.spots + " spots"; 
    }
    
    return retStr;
  };

  //the rendering of the DayListItem component
  return (
    <li className={dayClass} data-testid="day" onClick={() => props.setDay(props.name)} selected={props.selected}>
      <h2 className={dayClass}>{props.name}</h2> 
      <h3 className={dayClass}>{formatSpots()} remaining</h3>
    </li>

  );
}