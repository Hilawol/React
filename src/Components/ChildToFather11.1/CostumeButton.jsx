import React, { Component } from 'react'

export default class CostumeButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button onClick={() => this.props.onClick(this.props.text)} style={{ backgroundColor: this.props.color }}>{this.props.text}</button>
    )
  }
}
