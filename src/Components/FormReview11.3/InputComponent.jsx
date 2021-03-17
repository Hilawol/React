import React, { Component } from 'react'

export default class InputComponent extends Component {
  render() {
    return (
      <div>
        <label type="text" >{this.props.lableText}</label>
        <input type="text" name={this.props.inputName} onChange={(e) => this.props.inputHandler(e)} />
      </div>
    )
  }
}
