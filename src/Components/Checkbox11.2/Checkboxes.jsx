import React, { Component } from 'react'
import Checkbox from './Checkbox'

export default class Checkboxes extends Component {
  render() {
    return (
      <div>
        <Checkbox text="I read the term of the app" />
        <Checkbox text="I read the term of the app" />
        <Checkbox checked="true" text="I read the term of the app" />
        <Checkbox checked="true" text="I read the term of the app" />
      </div>
    )
  }
}


