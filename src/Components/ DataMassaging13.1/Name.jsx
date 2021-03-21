import React, { Component } from 'react'

export default class Name extends Component {
  render() {
    return (
      <div>
        {this.props.names.map((n, i) => <p key={i}>{n}</p>)}
      </div>
    )
  }
}
