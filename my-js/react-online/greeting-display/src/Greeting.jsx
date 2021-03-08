import React from 'react'

var hours = new Date().getHours();
var greeting = ''
var colorstyle = {};
switch(true){
  case (hours >= 5 && hours <= 11) :
    greeting = 'Good Morning'
    colorstyle.color = "green"
    break;
  case (hours >= 12 && hours <= 15) :
    greeting = 'Good Afternoon'
    colorstyle.color = "orange"
    break;
  case (hours >= 16 && hours <= 18) :
    greeting = 'Good Evening'
    colorstyle.color = "blue"
    break;
  case (hours >= 19 && hours <= 23) :
    greeting = 'Good Night'
    colorstyle.color = "black"
    break;
  default :
  break;
}


function Greeting() {
  return <h2>Hello Rajat, <span style= {colorstyle}>{greeting}</span></h2>
}

export default Greeting