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
        <Name names={this.state.names} />
        {this.state.before90.map((u, i) => {
          return <Card user={u} />
        })}
      </div>
    )
  }
}
