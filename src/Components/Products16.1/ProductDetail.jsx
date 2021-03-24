import React, { Component } from 'react'
import data from './Store'
import Products from './Products'
import { Link } from 'react-router-dom'

export default class ProductDetail extends Component {

  state = {
    title: "",
    image: "",
    size: ""
  };

  componentDidMount = () => {
    const product = data.find(p => p.id === Number(this.props.match.params.id));
    this.setState({ title: product.title, image: product.imageUrl, size: product.size, price: product.price });
  }

  render() {

    return (
      <div className="productDetail">
        <h3>{this.state.title}</h3>
        <img src={this.state.image} alt={this.state.title} />
        <h4>{`Size:${this.state.size}`}</h4>
        <h4>{`Price:$${this.state.price}`}</h4>
        <Link to="/products" Component={Products}>Back</Link>
      </div>
    )
  }
}
