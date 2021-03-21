import React, { Component } from 'react';
import axios from 'axios';
import './style.css'

export default class ChuckNorris extends Component {
  state = {
    joke: "",
    categories: [],
    selectedCategory: "",
  };

  componentDidMount = async () => {
    const response = await axios.get("https://api.chucknorris.io/jokes/categories");
    this.setState({ categories: response.data });
  }
  getJoke = () => {
    if (this.state.selectedCategory !== "") {
      this.getCategoryJoke();
    }
    else {
      this.getRandomJoke();
    }
  }
  getCategoryJoke = async () => {
    const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${this.state.selectedCategory}`);
    this.setState({ joke: response.data.value });
  }
  getRandomJoke = async () => {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    this.setState({ joke: response.data.value });
  }

  onSelectCategory = (e) => {
    this.setState({ selectedCategory: e.currentTarget.value });
  }
  render() {
    return (
      <div className="jokeDiv">
        <button onClick={this.getJoke}>Get Joke</button>
        <select onChange={this.onSelectCategory}>
          <option key="0" value="">Please Select Category</option>
          {this.state.categories.map((category, i) => {
            return <option key={i + 1} value={category} >{category}</option>
          })}
        </select>
        <p className="jokeP">{this.state.joke}</p>

      </div>
    )
  }
}
