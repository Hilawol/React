import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Homepage from './Homepage'
import ProductDetail from './ProductDetail'
import Products from './Products'
import './style.css'


export default class MyAPP extends Component {
  render() {
    return (
      <div>

        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Homepage} />
            <Route path="/products" exact component={Products} />
            <Route path="/products/:id" component={ProductDetail} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
