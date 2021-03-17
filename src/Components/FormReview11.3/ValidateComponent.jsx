import React, { Component } from 'react'
import ButtonComponent from './ButtonComponent'

export default class ValidateComponent extends Component {
  render() {
    return (
      <div className="validateForm hidden">
        Validate your information:<br />
        <h4>{this.props.formData.firstName}</h4>
        <h4>{this.props.formData.lastName}</h4>
        <h4>{this.props.formData.textArea}</h4>
        <ButtonComponent btnText="back" />
      </div>
    )
  }
}
