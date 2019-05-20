import React from 'react';
import './App.css';

import userDetails from "./service";

const user = userDetails();
function App() {
  const [time, updateTime] = React.useState(new Date().toString());
  setInterval(()=>{
    updateTime(new Date().toString());
  },1000)
  return (
    <div className="App">
      <h1>Hello <a href="http://twitter.com/{user.twitterHandle}" target="_blank">{user.name}</a></h1>
      <p>Current time is {time}</p>
    </div>
  );
}

export default App;
