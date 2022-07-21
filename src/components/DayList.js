import React from "react";
import DayListItem from 'components/DayListItem.js';

export default function DayList(props) {
  let dayListItemArr = [];

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

  return (
    <ul>
      {dayListItemArr}
    </ul>
  );
}