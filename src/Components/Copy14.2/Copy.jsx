import React, { Component } from 'react'
import './style.css'

export default class Copy extends Component {
  constructor(props) {
    super(props);

    this.textArea = React.createRef();
  }

  onCopy = () => {
    console.log(this.textArea);
    this.textArea.current.select();
    document.execCommand('copy');
  }
  render() {
    return (
      <div className="copy">
        <label htmlFor="textArea">What is the meaning of life?</label>
        <br />
        <input ref={this.textArea} type="textArea" />
        <br />
        <button onClick={this.onCopy}>Copy</button>
      </div>
    )
  }
}
