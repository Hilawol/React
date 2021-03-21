import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
      <div className="userCard">
        <div className="userName">Name: {this.props.user.name}</div>
        <div>Birthday: {this.props.user.birthday}</div>
        <div>favoritMeat: {this.props.user.favoriteFoods.meats.join(",")}</div>
        <div>favoritFish: {this.props.user.favoriteFoods.fish.join(",")}</div>
      </div>
    )
  }
}
