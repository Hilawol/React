import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <button style={{ margin: '10px', fontWeight: this.props.weigth }}> { this.props.text}</button >
    )
  }
}
