import React, {useState, useEffect} from 'react';

function Krishna() {
  let name = 'krishna';
  const [time, updatedTime ] = useState(new Date().toString());

  useEffect(()=>{
    setInterval(() => {
      updatedTime(new Date().toString())
    }, 1000);
  })

  return (
    <div className="App">
      <h1>Hi this is {name}</h1>
      <p>Current time is {time}</p>
    </div>
  )
}

export default Krishna