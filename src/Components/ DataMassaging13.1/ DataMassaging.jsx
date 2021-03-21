import React, { Component } from 'react';
import data from './data';
import Name from './Name';
import Card from './Card';
import './style.css'

export default class DataMassaging extends Component {
  state = {
    userData: data,
    names: [],
    before90: [],
  };

  componentDidMount = () => {
    this.setState({
      names: this.getNames(),
      before90: this.getBornAfter90()
    });

  }

  getNames = () => {
    return this.state.userData.map(({ name }) => name);
  }

  getBornAfter90 = () => {
    return this.state.userData.filter((u) => u.birthday.split("-")[2] < 1990);
  }
  render() {
    return (
      <div>
        {/* {this.getBornAfter90()} */}
        <Name names={this.state.names} />
        {this.state.before90.map((u, i) => {
          const fMeats = u.favoriteFoods.meats.join(",");
          const fFish = u.favoriteFoods.fish.join(",");
          return < Card key={i} name={u.name} birthday={u.birthday} favoritMeat={fMeats} favoritFish={fFish} />
        })}
      </div>
    )
  }
}
