import React, { Component } from 'react'

const Card = ({ user }) => {

  const { name, location, picture } = user;
  return (
    < div className="card" >
      <p>{`${name.title} ${name.first} ${name.last},
         ${location.country}`}</p>
      <img className="userImg" src={picture.large} alt={`${name.first} ${name.last}`}></img>
    </div >
  )
}

export default Card