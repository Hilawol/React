import React, { useState } from 'react'
import Avatar from '../RefactorWithHooks.19.4/Avatar'
import ApiCall from './ApiCall';

function CancleRequest() {

  const [display, setDisplay] = useState(true);

  const toggleDisplay = () => {
    setDisplay(!display);
  }

  const shouldDisplay = <div>
    <button onClick={toggleDisplay}>Hide Data</button>
    <Avatar />
  </div>

  const shouldNotDisplay = <div><button onClick={toggleDisplay}>Display Data</button></div>

  return (
    <div>
      {display ? <ApiCall /> : shouldNotDisplay}
    </div>
  )
}

export default CancleRequest
