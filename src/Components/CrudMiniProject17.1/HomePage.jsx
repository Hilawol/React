import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Animal from './Animal';
import axios from './api'
import Header from './Header';

export default class HomePage extends Component {

  state = { animals: [], };

  componentDidMount = async () => {
    try {
      const animals = (await axios.get()).data;
      this.setState({ animals: animals });
      // console.log(animals);
    }
    catch (err) {
      console.log("could not load data");
    }
  }

  componentDidUpdate = () => {
    console.log("homepage didupdate:", this.state);
  }

  render() {
    return (
      <div className="homePage">
        <div className="welcome">
          <h1>Welcome to Brook's Animal Shelter</h1>
          <h2>Please help our animals</h2>
        </div>
        <div className="animalFlex">
          {this.state.animals.map(animal => <Animal key={animal.id} animal={animal} />)}
        </div>
      </div>

    )
  }
}
