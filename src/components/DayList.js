import React from "react";
import DayListItem from 'components/DayListItem.js';

//the function of the DayList component
export default function DayList(props) {
  let dayListItemArr = [];

  //the array of DayList's child DayListItem component
  dayListItemArr = props.days.map(_day => {
    return (
      <DayListItem
        key={_day.id}
        name={_day.name}
        spots={_day.spots}
        selected={_day.name === props.value}
        setDay={props.onChange}  
      />
    );
  });

  //the rendering of the DayList component
  return (
    <ul>
      {dayListItemArr}
    </ul>
  );
}