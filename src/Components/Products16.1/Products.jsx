import React, { Component } from 'react'
import data from './Store'
import { Link } from 'react-router-dom'

export default class Products extends Component {
  state = { data: [], }

  componentDidMount = () => {
    this.setState({ data: data });
  }

  componentDidUpdate = () => {
    console.log(this.state);
  }
  render() {
    console.log((this.state.data));
    if (this.state.data.length > 0) {

    }
    return (

      <div >
        {this.state.data.map(p => <Link key={p.id} to={`/products/${p.id}`}>{p.title}</Link>)}
      </div>
    )
  }
}
