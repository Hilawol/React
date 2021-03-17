import React, { Component } from 'react'
import Box from './Box'
import './AnimatedBox.css'

export default class AnimatedBox extends Component {
  constructor(props) {
    super(props);
    this.state = { height: props.height, width: 0 };
  }

  setBoxWidth(newWidth) {
    this.setState({ width: newWidth });
  }
  async componentDidMount() {
    await setTimeout(this.setBoxWidth(this.props.width), 1000);
    setTimeout(this.setBoxWidth(0), 4000);
  }
  render() {
    // console.log("this.state.width:", this.state.width);
    // console.log("this.state.width:",this.state.width);
    return (
      <Box class="animatedBox" width={this.state.width} height={this.props.height} color={this.props.color} />
    )
  }
}
