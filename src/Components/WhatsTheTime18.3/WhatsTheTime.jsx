import React, { useState } from 'react'

const WhatsTheTime = () => {

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const handleSeconds = (e) => {
    setSeconds(e.currentTarget.value);
    setMinutes(e.currentTarget.value / 60);
    setHours(e.currentTarget.value / 3600);
  }

  const handleMinutes = (e) => {
    setMinutes(e.currentTarget.value);
    setSeconds(e.currentTarget.value * 60);
    setHours(e.currentTarget.value / 60);
  }

  const handleHours = (e) => {
    setHours(e.currentTarget.value);
    setMinutes(e.currentTarget.value * 60);
    setSeconds(e.currentTarget.value * 3600);
  }

  return (<div style={{ width: "max-content", margin: "100px auto" }}>

    <label>Seconds:</label>
    <input value={seconds} onChange={handleSeconds}></input>
    <br />
    <label>Minutes:</label>
    <input value={minutes} onChange={handleMinutes}></input>
    <br />
    <label>Hours:</label>
    <input value={hours} onChange={handleHours}></input>

  </div>);
}

export default WhatsTheTime