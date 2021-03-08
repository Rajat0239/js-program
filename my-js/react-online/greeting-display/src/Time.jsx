import React from 'react';


var hours = new Date().getHours();
var minutes = new Date().getMinutes();
var ampm = hours >= 12 ? 'PM' : 'AM'
hours = hours % 12;
hours = hours >= 10 ? hours:'0'+hours
hours = hours ? 12 : hours;
minutes = minutes < 10 ? '0'+minutes : minutes;
function Time(){
  return <h1>{`${hours}:${minutes}  ${ampm}`}</h1>
}

export default Time