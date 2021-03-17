import React, { Component } from 'react'
import InputComponent from './InputComponent'
import TextAreaComponent from './TextAreaComponent'
import ButtonComponent from './ButtonComponent'
import './myForm.css'
import ValidateComponent from './ValidateComponent'

export default class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      textArea: '',
      validate: false,
    };
  }

  onSubmitForm = (e) => {
    console.log("Submit form");
    this.setState({ validate: true });
    console.log(this.state);

    e.preventDefault();
  }

  inputHandler = (e) => {
    console.log("inputHandler");
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    console.log(this.state);
  }

  render() {
    return (
      this.state.validate ?
        <ValidateComponent formData={this.state} /> :

        <form className="myForm" onSubmit={this.onSubmitForm} >

          <InputComponent lableText="First Name:" inputName="firstName" inputHandler={this.inputHandler} />
          <br />
          <InputComponent lableText="Last Name:" inputName="lastName" inputHandler={this.inputHandler} />
          <br />
          <TextAreaComponent lableText="Free Text:" inputName="textArea" inputHandler={this.inputHandler} />
          <br />
          <ButtonComponent btnText="Submit" value="submit" />

        </form>
    )
  }
}
