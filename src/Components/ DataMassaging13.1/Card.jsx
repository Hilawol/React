import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    console.log(this.props.favoritMeat)
    return (
      <div className="userCard">
        <div className="userName">Name: {this.props.name}</div>
        <div>Birthday: {this.props.birthday}</div>
        <div>favoritMeat: {this.props.favoritMeat}</div>
        <div>favoritFish: {this.props.favoritFish}</div>
      </div>
    )
  }
}
