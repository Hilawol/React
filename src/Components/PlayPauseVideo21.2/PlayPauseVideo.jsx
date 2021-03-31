import React, { useRef } from 'react'

function PlayPauseVideo() {

  const videoRef = useRef();

  return (

    <div>
      <video ref={videoRef} width="420">
        <source src=" https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      </video>
      <br />
      <button onClick={() => { videoRef.current.play() }}>Play</button>
      <button onClick={() => { videoRef.current.pause() }}>Pause</button>
    </div>
  )
}

export default PlayPauseVideo
