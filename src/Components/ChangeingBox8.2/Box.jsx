import React, { Component } from 'react'
import './style.css'

export default class Box extends Component {
  render() {
    return (
      <div className="changingColorBox" style={{ backgroundColor: this.props.color, borderRadius: this.props.radius }}>

      </div>
    )
  }
}
