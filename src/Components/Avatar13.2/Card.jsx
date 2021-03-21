import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <p>{`${this.props.user.name.title} ${this.props.user.name.first} ${this.props.user.name.last},
         ${this.props.user.location.country}`}</p>
        <img className="userImg" src={this.props.user.picture.large} alt={`${this.props.user.name.first} ${this.props.user.name.last}`}></img>
      </div>
    )
  }
}
