import React, { useRef, useEffect, useState } from 'react'
import img1 from '../../Assets/image1Color.jpeg'
import img1BW from '../../Assets/image1BW.jpeg'
import img2 from '../../Assets/image2Color.jpeg'
import img2BW from '../../Assets/image2BW.jpeg'

function ImageToggle() {

  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);

  const img1Ref = useRef();
  const img2Ref = useRef();

  useEffect(() => {
    img1Ref.current.src = hover1 ? img1BW : img1;
    img2Ref.current.src = hover2 ? img2BW : img2;
  }, [hover1, hover2])

  return (
    <div style={{ display: "flex" }}>
      <img ref={img1Ref} style={{ width: "500px", margin: "20px" }} onMouseOver={() => setHover1(true)} onMouseOut={() => setHover1(false)}></img>
      <img ref={img2Ref} style={{ width: "500px", margin: "20px" }} onMouseOver={() => setHover2(true)} onMouseOut={() => setHover2(false)}></img>
    </div>
  )
}

export default ImageToggle
