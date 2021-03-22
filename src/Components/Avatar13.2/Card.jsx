import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    const { name, location, picture } = this.props.user;
    return (
      < div className="card" >
        <p>{`${name.title} ${name.first} ${name.last},
         ${location.country}`}</p>
        <img className="userImg" src={picture.large} alt={`${name.first} ${name.last}`}></img>
      </div >
    )
  }
}
