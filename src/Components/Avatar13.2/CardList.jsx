import React, { Component } from 'react'
import Card from './Card'
export default class CardList extends Component {
  render() {
    return (
      <div className="gridCards">
        {this.props.users.map((u, i) => <Card key={i} user={u} />)}
      </div>
    )
  }
}
