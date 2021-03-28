import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Homepage from './HomePage';
import Admin from './Admin';
import './style.css';
import Header from './Header'

export default class AnimalShelter extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Homepage} />
            <Route path="/admin" component={Admin} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
