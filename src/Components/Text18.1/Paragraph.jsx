import React, { useState } from 'react';
import './style.css'

const Paragraph = (props) => {

  const [expand, setExpand] = useState(false);
  const text = props.text.split('');

  return (
    <p className="paragraph">
      {expand ? text.slice(0, props.max) : text}
      <span onClick={() => setExpand(!expand)} >
        {expand ? " show less" : "...read more"}
      </span>
    </p>
  );

}

export default Paragraph