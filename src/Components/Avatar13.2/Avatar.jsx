import React, { Component } from 'react'
import axios from 'axios';
import CardList from './CardList';
import './style.css'

export default class Avatar extends Component {
  state = {
    users: [],
    filter: [],
  };

  componentDidMount = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=20&inc=location,name,picture");
    this.setState({ users: response.data.results });
  }

  filterUsers = (e) => {
    const filter = this.state.users.filter(u => (u.name.first).concat(u.name.last).toLowerCase().includes(e.currentTarget.value.toLowerCase()));
    this.setState({ filter: filter });
  }

  render() {
    return (
      <div>
        <input className="searchInput" type="text" placeholder="Search user by name" onChange={this.filterUsers} />
        <CardList users={this.state.filter.length > 0 ? this.state.filter : this.state.users} />
      </div>
    )
  }
}
