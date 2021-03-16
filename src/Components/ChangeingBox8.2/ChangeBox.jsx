import react, { Component } from 'react'
import Box from './Box'

export default class ChangeBox extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "hsl(0, 100%, 50%)", count: 0, border: null } //First color will be red. 0==red in HSL
  }

  changeColor = async () => {
    this.setState({ count: this.state.count + 1 });
    console.log(`count:${this.state.count},color:${this.state.color}`);
    if (this.state.count == 5) {
      this.setState({ border: "50px" });
    }
    this.setState({ color: `hsl(${this.state.count},100%, 50%)` });
  }

  // makeChange() {
  //   console.log("makeChange");
  // }
  componentDidMount() {
    setInterval(this.changeColor, 1500);
  }

  render() {
    return <div className="changeBox">
      <Box color={this.state.color} borderRadius={this.state.border} />
    </div>
  }
}