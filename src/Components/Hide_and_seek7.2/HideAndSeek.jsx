import react, { Component } from 'react';
import "./style.css";

class HideAndSeek extends Component {
  constructor(props) {
    super(props);

  }
  clickBox = (event) => {
    (event.currentTarget).nextSibling.classList.toggle("hidden");

  }
  render() {
    return (
      <div className="container">
        <button onClick={this.clickBox}>Show/Hide</button>
        <div className="box"></div>
      </div>
    )
  }
}

export default HideAndSeek;