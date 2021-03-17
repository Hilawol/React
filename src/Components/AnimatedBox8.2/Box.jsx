import React, { Component } from 'react'

export default class Box extends Component {
  render() {
    console.log("box component, render width:", this.props.width);
    return (
      <div className={this.props.class} style={{ width: this.props.width, height: this.props.height, backgroundColor: this.props.color }}>

      </div>
    )
  }
}
