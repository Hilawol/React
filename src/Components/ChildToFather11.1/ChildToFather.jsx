import React, { Component } from 'react'
import CostumeButton from './CostumeButton'

export default class ChildToFather extends Component {
  constructor(props) {
    super(props);
    this.state = { color: null }
    console.log("childtofather constructor")
  }

  onButtonClick = (currentColor) => {
    this.setState({ color: currentColor })
  }

  render() {

    console.log(" childtofather render");
    return (
      <div>
        {["blue", "red", "yellow"].map(c => (<CostumeButton color={c} text={c} onClick={this.onButtonClick} />))}
        {/* {/* <CostumeButton color="red" text="red" onClick={this.onButtonClick} />
        <br></br>
        {/* <CostumeButton color="red" text="red" /> */}
        <br></br>
        {/* <CostumeButton color="pink" text="pink" onClick={this.onButtonClick} />

        <CostumeButton color="blue" text="blue" onClick={this.onButtonClick} /> */}
        {/* <CostumeButton color={this.state.color} text={this.state.color} onClick={this.onButtonClick} />  */}
        <br></br>
        The Color Selected is:{this.state.color}
      </div>
    )
  }
}
