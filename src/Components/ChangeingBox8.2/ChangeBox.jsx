import react, { Component } from 'react'
import Box from './Box'

export default class ChangeBox extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "hsl(0, 100%, 50%)", count: 0, border: null } //First color will be red. 0==red in HSL
  }

  changeColor = async () => {
    switch (this.state.count) {
      case 5:
        this.setState({ border: "50%" });
        this.setState({ count: this.state.count + 5 });
        break;
      case 360:
        this.setState({ count: 0 });
        break;
      default:
        this.setState({ count: this.state.count + 5 });
    }
    this.setState({ color: `hsl(${this.state.count},100%, 50%)` });
  }

  componentDidMount() {
    setInterval(this.changeColor, 500);
  }

  render() {
    return <div className="changeBox">
      <Box color={this.state.color} radius={this.state.border} />
    </div>
  }
}