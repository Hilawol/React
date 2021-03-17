import React, { Component } from 'react'

export default class ButtonComponent extends Component {
  render() {
    return (
      <button style={{ margin: '10px', height: "25px", width: "85px" }} onSubmit={this.props.onSubmit}> { this.props.btnText}</button >
    )
  }
}
