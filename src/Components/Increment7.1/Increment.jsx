import react, { Component } from 'react';
import Button from '../Buttons4.1/Button';

class Increment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increase = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (<div>
      <button onClick={this.increase}>Increment</button>
      <br></br>
      {this.state.counter}
      {/* <input className="counter" type="text" readOnly value={this.state.counter} /> */}
    </div>
    )
  }

}

export default Increment;