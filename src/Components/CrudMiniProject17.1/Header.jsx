import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Link to="/" className="headerBtn">Home</Link>
          <Link to="/admin" className="headerBtn">Admin Page</Link>
        </div>
      </div>
    )
  }
}
