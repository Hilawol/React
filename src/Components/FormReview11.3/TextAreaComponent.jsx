import React, { Component } from 'react'

export default class TextAreaComponent extends Component {
  render() {
    return (
      <div>
        <label type="text" >{this.props.lableText}</label>
        <textarea type="textarea" style={{ height: "50px" }} name={this.props.inputName}
          onChange={(e) => this.props.inputHandler(e)} />
      </div>
    )
  }

}



