import React, { Component } from 'react'
import Card from './Card'

const CardList = ({ users }) => {
  return (
    <div className="gridCards">
      {users.map((u, i) => <Card key={i} user={u} />)}
    </div>
  )
}

export default CardList;