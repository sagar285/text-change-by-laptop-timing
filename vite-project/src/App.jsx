import React from 'react'
import "./App.css";
let hour = new Date(2023,1,15,20);
hour = hour.getHours()


let styling = {

}

let greet = "";

const App = () => {
  if(hour>0 && hour <12){
    greet="Good Morning"
    styling.color="red"
  }
 else if(hour>12 && hour <20){
    greet="Good Afternoon"
    styling.color="blue"
  }
  else{
    greet="Good Night"
    styling.color="green"
  }

  return (
    <div>App <h1 style={styling}>{greet}</h1></div>
  )
}

export default App