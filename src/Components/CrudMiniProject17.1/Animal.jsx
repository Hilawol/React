import React, { Component } from 'react'

export default class Animal extends Component {

  render() {
    const { id, name, age, image } = this.props.animal;
    return (
      <div className="animal">
        <div className="img" style={{ backgroundImage: `url(${image})` }}></div>
        <p><span className="animalTitle">Name:</span>{name}<span className="animalTitle">Age:</span> {age}</p>
      </div >
    )
  }
}
