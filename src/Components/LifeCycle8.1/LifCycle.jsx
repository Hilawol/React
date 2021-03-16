import react, { Component } from 'react';


export class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "pink" };
  }

  componentDidUpdate() {
    const updateDiv = document.querySelector("#update");
    updateDiv.textContent = `The updated favorite color is: ${this.state.favoriteColor}`
  }

  componentDidMount() {
    setTimeout(() => this.setState({ favoriteColor: "blue" }), 1000);
  }

  render() {
    return <div>
      <h1>My favorit color is {this.state.favoriteColor}</h1>
      <div id="update"></div>
    </div>
  }
}